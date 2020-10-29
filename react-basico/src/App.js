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
    ],
    novoComentario:{
      nome:'',
      email:'',
      mensagem:' '
    }
  }
adicionarComentario = evento=>{
  evento.preventDefault();

    console.log("add um comentario ...");
    // const novoComentario ={
    //   nome:'joão',
    //   email:'jooj@joj.com',
    //   data: new Date(2020, 3, 19),
    //   mensagem:'Olá mano, suave?'
    // }
    const novoComentario = {...this.state.novoComentario};
 
  //  let lista = this.state.comentarios;
   // lista.push(novoComentario);
    //this.setState({comentarios: lista});
    this.setState({
      comentarios:[...this.state.comentarios,novoComentario],
      novoComentario:{nome:'',emai:'',mensagem:''}
    })
}

removerComentario = comentario =>{
  let lista = this.state.comentarios;
  lista = lista.filter(c=>c!==comentario)
  this.setState({comentarios:lista})
}


digitacao = evento =>{
  const {name,value} = evento.target;
  this.setState({novoComentario:{...this.state.novoComentario,[name]:value}})
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
              data ={comentario.data} 
                onRemove={this.removerComentario.bind(this,comentario)} >
                {comentario.mensagem}
           </Comentario>
       ))}
        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar um comentario</h2>
          <div>
            <input type="text" 
            name="nome"
            value={this.state.novoComentario.nome}
            onChange={this.digitacao}
             placeholder="Seu nome:"></input>
          </div>
          <div>
            <input type="email"
             name="email"
             value={this.state.novoComentario.email}
            onChange={this.digitacao}
             placeholder="Seu email:"></input>
          </div>
          <div>
            <textarea name="mensagem"
             placeholder="Sua mensagem"
             value={this.state.novoComentario.mensagem}
             onChange={this.digitacao}
             rows="4"></textarea>
          </div>


          <button type="submit">Adicionar um Comentario</button>

        </form>
{/* 
    tradicional com uma linha *
        <Comentario nome="Joao" email="jooj@gmail.com" data ={new Date(2020, 10, 29)} />


     como se fosse tag para pegar os afiliados 
          <Comentario nome="Joao" email="jooj@gmail.com" data ={new Date(2020, 10, 29)} >
          nuooossa
         </Comentario>
    
          <Comentario nome="Maria" email="maria@gmail.com" data={new Date(2020, 3, 12)} />
     */}

    </div>
  );}
}

export default App;
