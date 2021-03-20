import './App.css';
import './styles/utils.css'
import './styles/theme.css'

function App() {
  return (
    <div className="App">
      <div className="f-center">
        <figure className="w-70 m-auto">
          <img src={process.env.PUBLIC_URL + '/logo900.png'} alt="" className="w-100"/>
        </figure>
      </div>
      <div className="f-content-center">
        <div className="w-80 m-auto">
          <h2>¡Hola a todos!</h2>
          <h1>Soy Cristian Sotomayor</h1>
          <p>
            Un fullstack developer autodidacta por pasión, vocación y profesión. Me encanta ser retado constantemente a superar mis miedos y limites.
          </p>
          <button className="primary-btn">Descargar CV</button>
        </div>
      </div>
    </div>
  );
}

export default App;
