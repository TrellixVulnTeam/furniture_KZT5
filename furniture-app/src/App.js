import React from "react";
import { Route, Switch } from "react-router-dom";
import Slider from './Component/slider';
import Home from './Component/Home';
import List from "./Component/List";

// let currentScrollPosition = 0;
//               let scrollAmount = 400;
//               const  sCont = document.querySelector(".storys-container");
//               const hScroll = document.querySelector(".horizontal-scroll");
//               const btnScrollLeft2 = document.querySelector("#btn-scroll-left2");
//               const btnScrollRight2 = document.querySelector("#btn-scroll-right2");
//               btnScrollLeft2.style.opacity = "0";
             
//               let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
//                function scrollHorizontally(val){
//                    currentScrollPosition += (val * scrollAmount);
//                    sCont.style.left = currentScrollPosition + "px";
//                    if(currentScrollPosition >= 0){
//                         currentScrollPosition = 0
//                         btnScrollLeft2.style.opacity = "0";
//                    }
//                    else{
//                      btnScrollLeft2.style.opacity = "1";
//                    }
//                    if(currentScrollPosition <= maxScroll){
//                        currentScrollPosition = maxScroll;
//                        btnScrollRight2.style.opacity = "0";
 
//                    }
//                    else{
//                      btnScrollRight2.style.opacity = "1";
//                    }
//                    sCont.style.left=currentScrollPosition + "px"; 
//                }

              

const App=()=>{
  /*const scrolls = ((val)=> scrollHorizontally(val));*/
  return(
    <>
    <List/>
    <Home/>
    <Slider/>
    </>
    
  )
}

export default App;