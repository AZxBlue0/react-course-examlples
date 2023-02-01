
export const isNotEmpty = (value) => {
    return value.length === 0;
}
export const createMinLengthCheck = (minLength) => { return (value) => {return value.length< minLength } };
export const valueLesserThen = ageValue => value => value < ageValue;
export const createRegularExpressionCheck = regexp => value => !regexp.test(value);



const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/i;
const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
const lovercaseLetter = /(.*[a-z])/;        // use positive look ahead to see if at least one lower case letter exists
const capitalLetter = /(.*[A-Z])/            // use positive look ahead to see if at least one upper case letter exists
const digit = /(.*\d)/                       // use positive look ahead to see if at least one digit exists
const symbol = /(.*\W)/                      // use positive look ahead to see if at least one non-word character exists

export const loverCaseValidator = {
    checkFunction: createRegularExpressionCheck(lovercaseLetter),
    errorMessage: 'This field needs to contain at least 1 lower case letter'
}
export const upperCaseValidator = {
    checkFunction: createRegularExpressionCheck(capitalLetter),
    errorMessage: 'This field needs to contain at least 1 upper case letter'
}
export const oneDigitValidator = {
    checkFunction: createRegularExpressionCheck(digit),
    errorMessage: 'This field needs to contain at least 1 digit'
}
export const symbolValidator = {
    checkFunction: createRegularExpressionCheck(symbol),
    errorMessage: 'This field needs to contain at least 1 symbol'
}

export const emailValidator = {
    checkFunction: createRegularExpressionCheck(emailRegex),
    errorMessage: 'This is not valid e-mail my dude'
}

export const timeValidator = {
    checkFunction: createRegularExpressionCheck(timeRegex),
    errorMessage: 'This is not a valid time my dude'
}

export const dateValidator = {
    checkFunction: createRegularExpressionCheck(dateRegex),
    errorMessage: 'This is not a valid date my dude'
}
export const isNotEmptyValidator = {
    checkFunction: isNotEmpty,
    errorMessage: 'Field must not be empty'
}

export const minimumLengthValidator = minLength => ({
    checkFunction: createMinLengthCheck(minLength),
    errorMessage: 'Field is too short'
});

export const minimumValueValidator = (ageValue) => ({
    checkFunction: valueLesserThen(ageValue),
    errorMessage: 'Person is under 18 yrsold'
});