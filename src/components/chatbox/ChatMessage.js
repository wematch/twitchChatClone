import React from 'react';

export default function ChatMessage(props) {
    return (
      <div>
          <p>{props.user}</p>
          <p>{props.message}</p>
      </div>
  )
}