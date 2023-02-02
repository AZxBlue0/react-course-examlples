export const CheckboxGroup = ({
    fieldName,
    label,
    error,
    value: currentlySelectedOptions = [],
    onChange,
    onBlur,
    options
}) => {
    const toggleOption = (option) => {
        if (currentlySelectedOptions.includes(option)) {
            onChange(currentlySelectedOptions.filter(o => o !== option));
        } else {
            onChange(currentlySelectedOptions.concat(option));
        }
    }
    return (
        <div className="form-component-container">
            <label>
                {label || fieldName}
            </label>
            {options.map(option =>
                <div className="radioContainer" key={option}>
                    <label>
                        <input
                            type='checkbox'
                            value={option}
                            checked={currentlySelectedOptions.includes[option]}
                            onChange={() => toggleOption(option)}
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