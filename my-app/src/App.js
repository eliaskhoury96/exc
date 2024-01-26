import logo from './logo.svg';
// import Hudini from './components/Hudini';
import React from 'react';
import { useState } from 'react';
import Landing from './components/Landing'
import Home from './components/Home'
import './App.css';





function App() {
  const [state, setState] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  })
  const [pageState, setPageState] = useState("Landing")
    function changePage(){
      if(pageState === "Landing"){
        setPageState("Home")
      }else{
        setPageState("Landing")
      }
    }
    
    return (
    <>
      {pageState === "Home" ? <Home shouldDiscount ={state.shouldDiscount} store={state.store}/> : <Landing user={state.user} hottest={state.store.find(h=>h.hottest)}/>}
      <button onClick={changePage}>Click me</button> 
      </>
    );
  
  
}
export default App;





