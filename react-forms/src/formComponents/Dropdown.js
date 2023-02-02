export const Dropdown = ({
    fieldName,
    label,
    error,
    value: currentlySelectedOption,
    onChange,
    onBlur,
    options
}) => {
    return (
        <div className="form-component-container">
            <label>
                {label || fieldName}
            </label>
            <select
                value={currentlySelectedOption}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}>
                {['', ...options].map(option =>
                    <option
                        key={option}
                        value={option}
                        checked={option === currentlySelectedOption}
                    >
                        {option}
                    </option>
                )}
            </select>
            {error && <div className="form-component-error">
                {error}
            </div>}
        </div>
    )
}