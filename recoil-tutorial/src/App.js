import './App.css';
import { RedButton } from './RedButton';
import { GreenButton } from './GreenButton';
import { BlueButton } from './BlueButton';
import { ResetButton } from './ResetButton';
import { ColorDisplay } from './ColorDisplay';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <RedButton />
        <GreenButton />
        <BlueButton />
        <ResetButton />
        <ColorDisplay />
      </div>
    </RecoilRoot>
  );
}

export default App;
