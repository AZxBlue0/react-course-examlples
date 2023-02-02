export const PasswordInput = ({
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
                type='password'
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