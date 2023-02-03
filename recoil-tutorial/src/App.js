import './App.css';
import 'rc-slider/assets/index.css';
import { ResetButton } from './ResetButton';
import { ColorDisplay } from './ColorDisplay';
import { RecoilRoot } from 'recoil';
import { ColorControlPanel } from './ColorControlPanel';
import { ColorControl } from './ColorControl';

function App() {
  return (
    <RecoilRoot>
      <div className='mainContainer'>
        <ColorDisplay />
        <ColorControlPanel />
        <ResetButton />
      </div>
    </RecoilRoot>
  );
}

export default App;
