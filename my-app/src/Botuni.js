
import React, { useState } from "react";

import logo from './logo.svg';





export function Image(){

  return <img src={logo} width="55px" height="55px" />

}

export function End(){

  return(

<div class="grid-container">

  <div class="grid-item">
  © Niko Lončar, 2024 <br/>
      <a href="mailto:nloncar177@gmail.com"> nloncar177@gmail.com</a> 
  </div>

  <div class="grid-item">
  <Image/>
  </div>

  <div class="grid-item react">
  React
  </div>

</div>

  )

}



