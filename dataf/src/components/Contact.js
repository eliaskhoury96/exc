// Contact.js
import React from 'react';


function Contact({ name,onSelectConversation}) {
   return(
    <div onClick={() => onSelectConversation(name)}>
     {name}
    </div>
   )
   
}

export default Contact;
