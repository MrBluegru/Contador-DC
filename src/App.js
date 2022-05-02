import './App.css';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import freeCodeCampLogo from './imgs/misuse-6.png';
import { useState } from 'react';
import mrbluelogo from './imgs/Letras_blancas.png';
import logo from './imgs/Logo.png';
import Temporizador from './componentes/Temporizador';

function App() {

  const [numClics, setNumClics] = useState(0) 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (

    <div className="App">

      <div className='logo-con-letras'>

        <img
        className='letras'
        src={mrbluelogo}
        alt='Letras del logo de Mr. Blue' />
          <img
          className='logo'
          src={logo}
          alt='Logo de Mr. Blue' />


      </div>

    <div className='contenedor-principal'>

      <Contador numClics={numClics} />
      
      <Boton
        texto='Click'
        esBotonDeClic={true}
        manejarClic={manejarClic} />

      <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClic={reiniciarContador} />

      
    </div>
    {/* <div className='temporizador'>
      <Temporizador 
      
      />
    </div> */}

      <div className='freecodecamp-logo-contenedor'>

        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' />

      </div>

    </div>
  );
}

export default App;
