
import './App.css';
import { NavButton } from './Botuni';
import { End } from './Botuni';



     //<NavButton naziv="Životopis/CV"/>
     //<NavButton naziv="Illustrator"/>
     //<NavButton naziv="Photoshop"/>

function Nav() {
  return (
    <div>

    <div className="nav">

     <h1 className="navSlov"> Niko Lončar  </h1>
     
    </div>


<div className='textt prim'>

</div>



<div>
<End/>
</div>


</div>
  );
}





function App(){


return(
<div data-theme>
<Nav/>
</div>
)
}



export default App;
