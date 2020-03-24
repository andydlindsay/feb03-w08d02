import React, { useContext } from 'react';
import MessageContext from './MessageContext';

const ChildTwo = () => {
  const messages = useContext(MessageContext);
  
  return (
    <div>
      <h2>I am child Two</h2>
      <p>{messages[0].text}</p>
    </div>
  );
};

export default ChildTwo;
