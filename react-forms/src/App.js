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
      <h1>Forms tutorial</h1>
      <div className='container'>
        <Form
          validators={[isNotEmptyValidator]}
          validateOn="change"
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
            },
            'favoriteFood': {
              labelText: 'Favourite Foods',
              type: 'radio',
              options: ['Pizza', 'Hamburgers', 'Stake', 'Pasta'],
              validators: [isNotEmptyValidator]
            },
            'favoriteSports': {
              type: 'checkbox',
              labelText: 'Favorite sports',
              options: ['Baseball', 'Box', 'Football', 'Cricket', 'E-sport'],
            },
            'contry': {
              type: 'dropdown',
              labelText: 'Select Your Country',
              options: ['Finland', 'Germany', 'Poland'],
            }
          }}
          onSubmit={displayData}
        />
      </div>
    </>
  );
}

export default App;
