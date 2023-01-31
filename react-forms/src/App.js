import './App.css';
import { Form } from './Form';

const displayData = ({ name }) => {
  alert('You Submitted' + name)
}

function App() {

  const isNotEmpty = (value) => {
    return value.length === 0;;
  }

  const isNotTooShort = value => value.length < 2;

  return (
    <>
      <Form
        fields={{
          'name': {
            type: "text",
            placeholder: 'JohnDoe',
            labelText: 'Your name',
            validationFunctions: [isNotEmpty, isNotTooShort]
          },
          'age': {
            type: "number",

          },
          'bio': {
            validationFunctions: [isNotEmpty, isNotTooShort],
            type: "text",

          },
          'birthday': {
            type: "text",

          },
        }}
        onSubmit={displayData}
      />
    </>
  );
}

export default App;
