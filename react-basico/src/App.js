import React, { Component } from 'react';
import './App.css';

import Comentario from './components/Comentarios.js';

// para iniciar o server npm start
class App extends Component {

  state = {
    comentarios:[
      {
        id: 1,
        nome:'joão',
        email:'jooj@joj.com',
        data: new Date(2020, 3, 19),
        mensagem:'Olá mano, suave?'
      },{
        id:2,
        nome:'Maria',
        email:'maria@joj.com',
        data: new Date(2020, 3, 19),
        mensagem:'ywwwa e-gril?'
      }
    ]
  }
  render(){
  return (
    <div className="App">
       

        <h1>Meu primeiro projeto</h1>

        {this.state.comentarios.map((comentario, indice)=>(
            <Comentario
            key={indice}
             nome={comentario.nome} 
             email={comentario.email}
              data ={comentario.data} >
                {comentario.mensagem}
             
           </Comentario>
       
       
       ))}



    {/* tradicional com uma linha */}
        <Comentario nome="Joao" email="jooj@gmail.com" data ={new Date(2020, 10, 29)} />


        {/* como se fosse tag para pegar os afiliados */}
          <Comentario nome="Joao" email="jooj@gmail.com" data ={new Date(2020, 10, 29)} >
          nuooossa
         </Comentario>
    
          <Comentario nome="Maria" email="maria@gmail.com" data={new Date(2020, 3, 12)} />
    

    </div>
  );}
}

export default App;
