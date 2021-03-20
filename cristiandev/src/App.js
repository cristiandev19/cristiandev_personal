import './App.css';
import './styles/utils.css'
import './styles/theme.css'

function App() {
  const urlCV = 'https://drive.google.com/file/d/1gj3sskWpp9RNnZTr4_WIgJRH6Uaw5fT5/view?usp=sharing';
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
          {/* <button className="primary-btn">Descargar CV</button> */}
          <a className="primary-btn" href={urlCV} target="_blank" rel="noreferrer">Descargar CV</a>
        </div>
      </div>
    </div>
  );
}

export default App;
