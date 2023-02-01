import './App.css';
import { Form } from './Form';
import { isEqualValidator } from './multiValidators';
import { dateValidator, emailValidator, isNotEmptyValidator, loverCaseValidator, minimumLengthValidator, minimumValueValidator, oneDigitValidator, symbolValidator, timeValidator, upperCaseValidator } from './validators';

const displayData = ({ name }) => {
  alert('You Submitted' + name)
}

function App() {


  return (
    <>
      <Form
        validators={[isNotEmptyValidator]}
        validateOn="submit"
        multiValidators={[isEqualValidator('password', 'confirmPassword')]}
        fields={{
          'name': {
            type: "text",
            placeholder: 'JohnDoe',
            labelText: 'Your name',
            validators: [
              minimumLengthValidator(2),
            ]
          },
          'age': {
            type: "number",
            validators: [
              minimumValueValidator(18)
            ],
          },
          'birthday': {
            type: "text",
            validators: [
              dateValidator
            ]
          },
          'email': {
            type: "text",
            validators: [
              emailValidator
            ]
          },
          'birthHour': {
            labelText: "Birth Hour",
            validators: [
              timeValidator
            ],
            type: "text"
          },
          'password': {
            type: 'password',
            placeholder: 'Enter your password',
            validators: [
              minimumLengthValidator(8),
              loverCaseValidator,
              upperCaseValidator,
              oneDigitValidator,
              symbolValidator
            ]
          },
          'confirmPassword': {
            type: 'password',
            placeholder: 'confirm password',
            validators: [
            ]
          }
        }}
        onSubmit={displayData}
      />
    </>
  );
}

export default App;
