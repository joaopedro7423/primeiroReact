import React from 'react';

//import do pacote
import {formatRelative} from 'date-fns';

//importar o css
import './Comentario.css';

import imagemUsuario from './user.jpg';
const Comentario = props =>{
  //um jeito de fazer um css
  // const estilo = {
  //   color: 'red',
  //   padding:'10px',
  //   fontSize:'30px'
  // }
//exemplo de como usar:
// <h2 style ='estilo'></h2>

  return  <div className="Comentario">  
            <img class="avatar" src={imagemUsuario}/>
        <div class="conteudo"> 
        <h2 class='nome'>{props.nome}</h2>
        <p class='email'>{props.email}</p>
            <p class='mensagem'>{props.children}</p>
            {/* <p>{formatRelative(props.data),new Date()}</p>   como usar um pacote para formatação de datas, ta bugando essa disgraça pq deve esta travado em um só horario e reconhece outro dai da conflito e nao nem um pouco afim de resolver essa bosta pois ja entendi o conceito foda ci */} 
            <button class='button' onClick={props.onRemove}>&times;</button>
          

        </div>
             {/* <p>{props.data.toString()}</p> */}
            
    </div>
        
};

export default Comentario;