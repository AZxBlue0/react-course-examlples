import { useEffect, useState } from "react";
import { CheckboxGroup } from "./formComponents/CheckboxGroup";
import { Dropdown } from "./formComponents/Dropdown";
import { NumberInput } from "./formComponents/NumberInput";
import { PasswordInput } from "./formComponents/PasswordInput";
import { RadioGroup } from "./formComponents/RadioGroup";
import { TextInput } from "./formComponents/TextInput";

const getValidationErrors = (fieldValues, fieldsObject, globalValidators, editedFields = {}, isSubmit) => {
    let errors = {};
    for (const [fieldName, fieldConfig] of Object.entries(fieldsObject)) {
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

const getComponentForFieldType = (type) => {
    const typesMap = {
        password: PasswordInput,
        number: NumberInput,
        text: TextInput,
        radio: RadioGroup,
        checkbox: CheckboxGroup,
        dropdown: Dropdown
    }
    return typesMap[type]
}

const getDefaultValue = value => {
    const typeMap = {
        text: '',
        number: 0,
        radio: '',
        checkbox: [],
        dropdown: '',
        password: '',
    }
    return typeMap[value]
}

const getMultiFieldValidationErrors = (fieldValues, validators, editedFields = {}, isSubmit) => {
    let errors = [];
    for (const { checkFunction, errorMessage, involvedFields } of validators) {
        const involvedEditedFields = involvedFields.every(field => editedFields[field]);

        if ((isSubmit || involvedEditedFields) && !checkFunction(fieldValues)) {
            errors.push(errorMessage);
        }
    }

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

    const fieldBlurred = fieldName => {
        const newEditedFields = { ...editedFields, [fieldName]: validateOn === 'change' };
        setEditedFields(newEditedFields);
    }

    useEffect(() => {
        const errors = getValidationErrors(fieldValues, fields, validators, editedFields, formHasBeenSubmitted);
        const multiErrors = getMultiFieldValidationErrors(fieldValues, multiValidators, editedFields, formHasBeenSubmitted);
        setValidationErrors(errors);
        setMultiValidationErrors(multiErrors);
    }, [fieldValues, editedFields, fields, validators, multiValidators, formHasBeenSubmitted])

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                {
                    Object.entries(fieldValues).map(([fieldName, fieldValue]) => {
                        const fieldConfig = fields[fieldName];
                        const { labelText, type, placeholder, options } = fieldConfig;
                        const InputComponent = getComponentForFieldType(type);
                        const error = validationErrors[fieldName];
                        return (
                            <InputComponent
                                key={fieldName}
                                fieldName={fieldName}
                                label={labelText || capitalise(fieldName)}
                                hint={placeholder}
                                value={fieldValue}
                                options={options}
                                onChange={newValue => setFieldValues({
                                    ...fieldValues, [fieldName]: newValue
                                })}
                                error={error}
                                onBlur={() => fieldBlurred(fieldName)}
                            />)
                    })
                }
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
            <div className="multi-error-container form-component-error">{multiValidationErrors.map(error => <p>{error}</p>)}</div>
        </>
    );
}