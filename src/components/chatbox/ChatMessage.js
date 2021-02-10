import React from "react";
import moment from "moment";

export default function ChatMessage(props) {
  let relativeDate = "";
  if (props.createdAt !== null) {
    relativeDate = moment(new Date(props.createdAt.seconds * 1000)).fromNow();
  }
  return (
    <div className="chatmessage-container" title={relativeDate}>
      <span className="chatmessage-user" style={{ color: props.userColor }}>
        {props.user}:{" "}
      </span>
      <span className="chatMessage-message">{props.message}</span>
    </div>
  );
}
