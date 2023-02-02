export const RadioGroup = ({
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
            {options.map(option =>
                <div className="radioContainer" key={option}>
                    <label>
                        <input
                            type='radio'
                            value={option}
                            checked={option === currentlySelectedOption}
                            onChange={(e) => onChange(e.target.value)}
                            onBlur={onBlur}
                        />{option}
                    </label>
                </div>
            )}
            {error && <div className="form-component-error">
                {error}
            </div>}
        </div>
    )
}