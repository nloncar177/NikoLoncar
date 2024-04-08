
import './App.css';
import { End } from './Botuni';


function Nav() {
  return (

    <div className="nav">

     <h1 className="navSlov"> Niko Lončar  </h1>
     
    </div>
  );
}




export function CVimage(){

  return <img src={require('./nl.jpg')} 
  alt='Životopis' height="" width="80%"
  className='razmak' />

}


function App(){
return(
<div className='data-theme'>

<Nav/>

<CVimage/>

<End/>

</div>
)
}



export default App;
