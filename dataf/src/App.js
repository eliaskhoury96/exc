import React, { useState } from 'react';
import List from './components/List';
import Conversation from './components/Conversation';

function App() {
  const [display, setDisplay]=useState(null)
    const [state, setState] = useState({
      
    
    conversations: [
        {
            with: "Laura", convo: [
                { text: "Hi", sender: "self" },
                { text: "You there?", sender: "self" },
                { text: "Yeah, hi, what's up?", sender: "other" }
            ]
        },
        {
            with: "Dad", convo: [
                { text: "Have you finished your school work yet?", sender: "other" },
                { text: "Yes.", sender: "self" },
                { text: "What do you mean, yes?", sender: "other" },
                { text: "??", sender: "self" }
            ]
        },
        {
            with: "Shoobert", convo: [
                { text: "Shoobert!!!", sender: "self" },
                { text: "Dude!!!!!!!!", sender: "other" },
                { text: "Shooooooooo BERT!", sender: "self" },
                { text: "You're my best friend", sender: "other" },
                { text: "No, *you're* my best friend", sender: "self" },
            ]
        }
    ]
});
const contacts = state.conversations.map(convo => convo.with)
const selectConversation = (contactName) => {
setDisplay(contactName);
};

return (
  <div>
      {
          display === null ?
          <List contacts={contacts} onSelectConversation={selectConversation} />:
          <Conversation conversation={state.conversations.find(convo => convo.with === display)} onSelectConversation={selectConversation} />
         
      }
  </div>
);
    }
export default App;



