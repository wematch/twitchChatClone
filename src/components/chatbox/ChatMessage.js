import React from "react";
import moment from "moment";

export default function ChatMessage(props) {
  return (
    <div className="chatmessage-container">
      <span className="chatmessage-user" style={{ color: props.userColor }}>
        {props.user}:{" "}
      </span>
      <span className="chatMessage-message">{props.message}</span>
    </div>
  );
}
