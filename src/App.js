import logo from './logo.svg';
import Calculator from './Calculator.js';
import './App.css';

function App() {
  return (
    <div className="App">
    <Calculator num1={8} num2={5}/>
    <Calculator num1={3} operator={'*'} num2={2}/>
    <Calculator num1={6} operator={'/'} num2={4}/>
    </div>
  );
}

export default App;
