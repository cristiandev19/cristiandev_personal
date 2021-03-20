import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Row">
        <figure>
          <img src={process.env.PUBLIC_URL + '/logo192.png'} alt=""/>
        </figure>
      </div>
      <div className="Row f-column">
        <h2>¡Hola a todos!</h2>
        <h1>Soy Cristian Sotomayor</h1>
        <p>Un fullstack developer autodidacta por pasión, vocación y profesión. Me encanta ser retado constantemente a superar mis miedos y limites.</p>
        <button>Descargar CV</button>
      </div>
    </div>
  );
}

export default App;
