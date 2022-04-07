import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeLogo from './images/logo.svg';
import {useState} from 'react';

function App() {

  const [numClicks, setNumeroClicks] = useState(0);

  const manejarClick = () => {
    setNumeroClicks (numClicks + 1);

  };

  const reiniciarContador = () => {
    setNumeroClicks (0);
  };


  return (
    <div className="App">
      <div className="freecodecamp-logo-div">
        <img className="freecodecamp-logo"
        src={freeCodeLogo}
        alt="logo"/>
      </div>
      <div className="div-principal">
        <Contador 
          numeroClicks={numClicks}
        />
        <Boton 
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
