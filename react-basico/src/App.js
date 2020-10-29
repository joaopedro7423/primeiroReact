import logo from './logo.svg';
import './App.css';

import Comentario from './components/Comentarios';

// para iniciar o server npm start
function App() {
  return (
    <div className="App">
      <h1>Meu primeiro projeto</h1>
      <Comentario/>
      <Comentario/>
      <Comentario/>
    </div>
  );
}

export default App;
