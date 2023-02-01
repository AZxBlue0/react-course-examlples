import { useState } from "react";

const getValidationErrors = (fieldValues, fieldsObject, globalValidators, editedFields = {}, isSubmit) => {
    let errors = {};
    console.log(isSubmit);
    for (const [fieldName, fieldConfig] of Object.entries(fieldsObject)) {
        console.log(editedFields);
        if (isSubmit || editedFields[fieldName]) {
            const allValidators = [...globalValidators, ...(fieldConfig.validators || [])];
            if (!fieldConfig.validators) continue;
            for (const { checkFunction, errorMessage } of allValidators) {
                if (checkFunction(fieldValues[fieldName])) {
                    errors[fieldName] = errorMessage;
                    break;
                };
            }
        }
    }
    return errors;
}

const getDefaultValue = value => {
    const typeMap = {
        text: '',
        number: 0,
        password: '',
    }
    return typeMap[value]
}

const getMultiFieldValidationErrors = (fieldValues, validators, editedFields = {}, isSubmit) => {
    let errors = [];
    for (const { checkFunction, errorMessage, involvedFields } of validators) {
        const involvedEditedFields = involvedFields.every(field => editedFields[field]);

        if ((isSubmit || involvedEditedFields) && !checkFunction(fieldValues)) {
            console.log(checkFunction(fieldValues));
            errors.push(errorMessage);
        }
    }
    console.log(errors);

    return errors;
}

const createFieldDefaults = fieldsObject => {
    let fieldValues = {};

    for (const [name, fieldConfig] of Object.entries(fieldsObject)) {
        const { type } = fieldConfig;
        fieldValues[name] = getDefaultValue(type);
    }

    return fieldValues;
}

const capitalise = (str) => {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export const Form = ({ fields, onSubmit, validators = [], multiValidators = [], validateOn = 'submit' }) => {
    const [fieldValues, setFieldValues] = useState(createFieldDefaults(fields));
    const [validationErrors, setValidationErrors] = useState({});
    const [multiValidationErrors, setMultiValidationErrors] = useState([]);
    const [editedFields, setEditedFields] = useState({});
    const [formHasBeenSubmitted, setFormHasBeenSubmitted] = useState(false);

    const updateValidationErrors = fieldName => {
        const newEditedFields = { ...editedFields, [fieldName]: validateOn === 'change' };
        const errors = getValidationErrors(fieldValues, fields, validators, newEditedFields, formHasBeenSubmitted);
        const multiErrors = getMultiFieldValidationErrors(fieldValues, multiValidators, newEditedFields, formHasBeenSubmitted);
        setValidationErrors(errors);
        setMultiValidationErrors(multiErrors);
        setEditedFields(newEditedFields);
    }

    return (
        <>
            <div>{multiValidationErrors.map(error => <p>{error}</p>)}</div>
            <form onSubmit={e => e.preventDefault()}>
                {Object.entries(fieldValues).map(([fieldName, fieldValue]) => {
                    const fieldConfig = fields[fieldName];

                    const { labelText, type, placeholder } = fieldConfig;
                    const error = validationErrors[fieldName]
                    return (
                        <label key={`l ${fieldName}`} >
                            {labelText ? labelText : capitalise(fieldName)}
                            < input
                                key={fieldName}
                                type={type}
                                value={fieldValue}
                                placeholder={placeholder}
                                onChange={e => setFieldValues({ ...fieldValues, [fieldName]: e.target.value })}
                                onBlur={() => {
                                    updateValidationErrors(fieldName);
                                }}
                            />
                            {error && <p>{error}</p>}
                        </label>
                    )
                })}

                <button onClick={() => {
                    if (Object.keys(validationErrors).length === 0 && multiValidationErrors.length === 0) {
                        const errors = getValidationErrors(fieldValues, fields, validators, {}, true);
                        const multiErrors = getMultiFieldValidationErrors(fieldValues, multiValidators, {}, true);
                        setValidationErrors(errors);
                        setMultiValidationErrors(multiErrors);
                        setFormHasBeenSubmitted(true);

                        if (errors.length === 0 && multiErrors.length === 0) {
                            onSubmit(fieldValues)
                        }
                    }
                }}>Submit</button>
            </form >
        </>
    );
}