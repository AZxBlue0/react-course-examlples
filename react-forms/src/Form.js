import { useState } from "react";

const getValidationError = (fieldValues, fieldsObject) => {
    for (const [fieldName, fieldConfig] of Object.entries(fieldsObject)) {
        if(!fieldConfig.validationFunctions) continue;
        for (const validationFunction of fieldConfig.validationFunctions) {
            if (validationFunction(fieldValues[fieldName])) {
                return `Uh oh there is an error in the ${fieldName} field`;
            }
        }
    }
    return '';
}

const getDefaultValue = value => {
    const typeMap = {
        text: '',
        number: 0
    }
    return typeMap[value]
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

export const Form = ({ fields, onSubmit }) => {
    const [fieldValues, setFieldValues] = useState(createFieldDefaults(fields));
    const [validationError, setValidationError] = useState('');

    return (
        <form onSubmit={e => e.preventDefault()}>
            {Object.entries(fieldValues).map(([fieldName, fieldValue]) => {
                const fieldConfig = fields[fieldName];

                const { labelText, type, placeholder } = fieldConfig;

                return (
                    <label key={`l ${fieldName}`} >
                        {labelText ? labelText : capitalise(fieldName)}
                        < input
                            key={fieldName}
                            type={type}
                            value={fieldValue}
                            placeholder={placeholder}
                            onChange={e => setFieldValues({ ...fieldValues, [fieldName]: e.target.value })}
                        />
                    </label>
                )
            })}
            {validationError}
            <button onClick={() => {
                const error = getValidationError(fieldValues, fields);
                setValidationError(error)
                if (error === '') {
                    onSubmit(fieldValues)
                }
            }}>Submit</button>
        </form >
    );
}