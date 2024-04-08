
import './App.css';
import { End } from './Botuni';

import React, { useEffect } from 'react';



function Example() {
  useEffect(() => {
    document.title = 'Niko Lončar';
  }, []);
}



function Nav() {
  return (

    <div className="nav">

     <h1 className="navSlov"> Niko Lončar  </h1>
     
    </div>
  );
}




export function CVimage(){

  return <img src={require('./nl.jpg')} 
  alt='Životopis' height="" width="55%"
  className='razmak' />

}


function App(){
return(
<div className='data-theme'>

<Nav/>

<CVimage/>
<br/>
<End/>

</div>
)
}



export default App;
