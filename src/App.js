import Display from './components/Display.jsx';
import Buttons from './components/Buttons';
import './App.css';
import { useState } from 'react';

function App() {
  const [calculation , setCalculation] = useState('')

  function handleOnclick(e)
  {
    if(e ==='c' || e==='C')
      {
        setCalculation('')
      }
      else  if (e==='=')
        {
          setCalculation(eval(calculation));
        }
        else 
        {
          setCalculation(calculation + e)
        }

  }

  return (
    <div className='container'>
    <div className="App">
      <Display res={calculation}/>
      <Buttons onBtnClick={handleOnclick}/>
    </div>
    </div>
  );
}

export default App;
