
import './App.css';
import { NavButton } from './Botuni';
import { NewsButton } from './Botuni';
import { DarkMode } from './Botuni';
import { NoviNews } from './Botuni';




function Nav() {
  return (
    <div className="nav">

     <h1>VIJESTI  </h1>
     <NavButton naziv="Vijesti"/>
     <NavButton naziv="Politika"/>
     <NavButton naziv="Sport"/>

     <DarkMode/>

    </div>
    
  );
}




function NewsButtons(){

  return (
    <div className="botuniVijestiON"> 
     <NewsButton naziv="N1 Vijesti" />
     <NewsButton naziv="Slobodna Dalmacija" />
     <NewsButton naziv="24 Sata" />
     <NoviNews/>
    </div>
  );

}



function App(){


return(
<div data-theme>
<Nav/>
<NewsButtons/> 
</div>
)
}



export default App;
