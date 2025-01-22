import { useState } from 'react';
import './assets/views/teste.css';

function App() {
  const [num, setNum] = useState(0);

  const adc = () => { setNum(num + 1); };
  const adc1 = () => { setNum(num + 10); };

  const remove = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const remove1 = () => {
    if (num >= 10) {
      setNum(num - 10);
    } else {
      setNum(0);
    }
  };

  const reset = () => { setNum(0); };

  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{num}</h2>
      <button onClick={adc}>Adicionar</button>
      <button onClick={adc1}>Adicionar +10</button>
      <button onClick={reset}>Zerar</button>
      <button onClick={remove}>Remover</button>
      <button onClick={remove1}>Remover -10</button>
    </div>
  );
}

export default App;
