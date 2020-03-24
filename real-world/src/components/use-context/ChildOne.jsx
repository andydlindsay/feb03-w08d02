import React, { useContext } from 'react';
import MessageContext from './MessageContext';

const ChildOne = () => {
  const messages = useContext(MessageContext);

  return (
    <div>
      <h2>I am child one</h2>
      <p>{messages[1].text}</p>
    </div>
  )
}

export default ChildOne
