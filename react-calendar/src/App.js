import moment from 'moment';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import { MultiDatePickerController} from './MultiDatePickerController';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MultiDatePickerController/>
      </BrowserRouter>
    </div>
  );
}

export default App;


