import React from 'react';
import './App.css';

import Comentario from './components/Comentarios.js';

// para iniciar o server npm start
function App() {
  return (
    <div className="App">
       

        <h1>Meu primeiro projeto</h1>
    {/* tradicional com uma linha */}
        <Comentario nome="Joao" email="jooj@gmail.com" data ={new Date(2020, 10, 29)} />


        {/* como se fosse tag para pegar os afiliados */}
          <Comentario nome="Joao" email="jooj@gmail.com" data ={new Date(2020, 10, 29)} >
          nuooossa
         </Comentario>
    
          <Comentario nome="Maria" email="maria@gmail.com" data={new Date(2020, 3, 12)} />
    
    </div>
  );
}

export default App;
