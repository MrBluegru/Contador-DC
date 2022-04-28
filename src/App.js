import './App.css';
import Boton from './componentes/Boton.jsx';
import freeCodeCampLogo from './imgs/misuse-6.png';

function App() {

  const manejarClic = () => {
    console.log('Clic')
  }

  const reiniciarContador = () => {
    console.log('Reiniciar')
  }

  return (

    <div className="App">

      <div className='freecodecamp-logo-contenedor'>

        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' />

      </div>

    <div className='contenedor-principal'>
      
      <Boton
        texto='Click'
        esBotonDeClic={true}
        manejarClic={manejarClic} />

      <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClic={reiniciarContador} />

    </div>

    </div>
  );
}

export default App;
