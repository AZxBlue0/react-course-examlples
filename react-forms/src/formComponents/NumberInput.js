export const NumberInput = ({
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
                type='number'
                value={value}
                placeholder={hint}
                onChange={e => onChange(Number(e.target.value))}
                onBlur={() => onBlur()}
            />
            {error && <div className="form-component-error">
                {error}
            </div>}
        </div>
    )
}