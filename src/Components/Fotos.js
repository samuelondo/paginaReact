import React from 'react';
import Imagen from './Assets/zzzzz.jpeg'

function Fotos(){
    return(
        <div className='fotos'>
                <img className= 'img' src={Imagen}></img>
                <img className= 'img' src={Imagen}></img>
                <img className= 'img' src={Imagen}></img>
                <img className= 'img' src={Imagen}></img>
        </div>
    )
}

export default Fotos;
