export const TextInput = ({
    fieldName,
    label,
    hint,
    error,
    value,
    onChange,
    onBlur
}) => {
    return (
        <div className="form-component-container">
            <label>
                {label || fieldName}
            </label>
            <input
                type='text'
                value={value}
                placeholder={hint}
                onChange={e => onChange(e.target.value)}
                onBlur={() => onBlur()}
            />
            {error && <div className="form-component-error">
                {error}
            </div>}
        </div>
    )
}