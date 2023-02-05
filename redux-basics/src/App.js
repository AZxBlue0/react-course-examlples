import './App.css';
import { BlueButton } from './components/BlueButton';
import { GreenButton } from './components/GreenButton';
import { RedButton } from './components/RedButton';
import { ResetButton } from './components/ResetButton';
import { ColorDisplay } from './components/colorDisplay';

function App() {
  return (
    <div>
      <ColorDisplay/>
      <RedButton/>
      <GreenButton/>
      <BlueButton/>
      <ResetButton/>
    </div>
  );
}

export default App;
