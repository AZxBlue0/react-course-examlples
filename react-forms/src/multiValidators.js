export const isEqualValidator = (fieldName1, fieldName2) => ({
    checkFunction: fieldValuesMap => { return (fieldValuesMap[fieldName1] === fieldValuesMap[fieldName2]) },
    errorMessage: `${fieldName1} and ${fieldName2} must contain the same value`,
    involvedFields: [fieldName1, fieldName2]
})