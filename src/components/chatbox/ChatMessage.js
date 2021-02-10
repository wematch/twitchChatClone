import React from "react";
import moment from "moment";

export default function ChatMessage(props) {
    
  const relativeDate = new Date(props.createdAt.seconds * 1000);
  return (
    <div
      className="chatmessage-container"
      title={moment(relativeDate).fromNow()}
    >
      <span className="chatmessage-user">{props.user}: </span>
      <span className="chatMessage-message">{props.message}</span>
    </div>
  );
}
