
import React, { useState } from "react";

//import useLocalStorage from 'use-local-storage'


export const DarkMode = () => {

    // darkmode
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [theme, setTheme] = useState('theme', defaultDark ? 'dark' : 'light');
  
    const switchTheme = () =>{ console.log("ssx");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); console.log(newTheme);
    }


    return (
      <div className="toggle-theme-wrapper">
        <span>☀️</span>
        <label className="toggle-theme" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onClick={switchTheme}
          />
          <div className="slider round"></div>
        </label>
        <span>🌒</span>
      </div>
    );
};


export function NavButton( { naziv } ){
    return(
    <button className="navBotun">
      {naziv}
   </button>
   )
}
  



  export function NewsButton( { naziv } ){
    return(
    <button className="vstBotun">
    {naziv}
  </button>
  )
  }



  export function NoviNews(){
  
    return (
      <div className="">
        <span></span>
        <label className="toggle-theme" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
          />
          <div className="slider round"></div>
        </label>
        <span></span>
      </div>
    );
  }



