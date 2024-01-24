import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot = () => {
    const spamComponents = Array.from({ length: 500 }, (_, index) => (
       <Spam key={index} />
    ));
  return <div>{spamComponents}</div>;
  }
  
  
  

export default Spamalot

