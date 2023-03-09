import React, { useRef } from 'react';
import "../styles/RefModal.css"


export default function Modal(){

  let useRefBtn = useRef();
  let useRefNav = useRef();

  const handleBtn = () =>{
    
    if(useRefBtn.current.textContent === "Abrir"){
      useRefBtn.current.textContent = "Cerrar";
      useRefNav.current.style.display = "flex";
      useRefNav.current.style.flexDirection = "column";     
      useRefNav.current.style.alignItems = "center";      
      
    } else{
      useRefBtn.current.textContent = "Abrir";
      useRefNav.current.style.display = "none";
      
    };
  };


    return(
      <div className='lista__container'>
        <button className='lista__button' ref={useRefBtn} onClick={handleBtn}>Abrir</button>

        <nav className='lista__nav' ref={useRefNav} >
          <h2>LISTA DE COSAS</h2>
          <li className='lista__item'>Cosa 1</li>
          <li className='lista__item'>Cosa 2</li>
          <li className='lista__item'>Cosa 3</li>
          <li className='lista__item'>Cosa 4</li>
          <li className='lista__item'>Cosa 5</li>
          <li className='lista__item'>Cosa 6</li>        
        </nav>
      </div>
    );
};

//HACER LA TRANSICION