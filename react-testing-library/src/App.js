import { BinaryCalculator } from './BinaryCalculatorCtx';
import './App.css';
import { BinaryClicksProvider } from './BinaryClicksrovider';

function App() {
  return (
    <div className="App">
      <BinaryClicksProvider numberOfButtons={5} >
        <BinaryCalculator />
      </BinaryClicksProvider>
    </div>
  );
}

export default App;
