
import React from 'react';

function Conversation({ conversation, onSelectConversation}) {
  return (
    <div>
      {conversation.convo.map((message, index) => (
        <div key={index}>
          <span>{message.sender === 'self'? 'Me':conversation.with}: </span>
          {message.text}
          
        </div>
      ))}
      <button onClick={() => onSelectConversation(null)}>back</button>
    </div>

  );
}

export default Conversation;
