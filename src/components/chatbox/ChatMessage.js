import React from 'react';

export default function ChatMessage(props) {
    return (
      <div className="chatmessage-container">
          <span className="chatmessage-user">{props.user}: </span>
          <span className="chatMessage-message">{props.message}</span>
      </div>
  )
}