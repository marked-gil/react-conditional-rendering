import logo from './logo.svg';
import './App.css';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import NestingComponents from './components/NestingComponents';

function App() {
  return (
    <div className="App">
      {/* <ConditionalRenderingFunctional connected={true} /> */}
      {/* <ConditionalRenderingClass /> */}
      <NestingComponents />
    </div>
  );
}

export default App;
