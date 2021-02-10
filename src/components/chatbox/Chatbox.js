import React, { useState, useEffect, useRef } from "react";

import firebase from "firebase/app";
import { firestore } from "../../firebase/Firebase";
import { useSelector } from "react-redux";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ChatMessage from "./ChatMessage";

export default function Chatbox() {

  const user = useSelector((state) => state);

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt", "asc");
  const [messages] = useCollectionData(query);

  const [formValue, setFormValue] = useState("");

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const sendMessage = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      user: user.username.username,
      userColor: user.username.userColor,
      message: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setFormValue("");
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-message-container">
        {messages &&
          messages.map((msg, index) => (
            <ChatMessage
              key={index}
              user={msg.user}
              message={msg.message}
              userColor={msg.userColor}
              createdAt={msg.createdAt}
            />
          ))}
        <div ref={divRef} />
      </div>

      <form className="chatbox-form" onSubmit={sendMessage}>
        <input
          value={formValue}
          placeholder="Write your message"
          className="chatbox-input"
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button
          type="submit"
          disabled={!formValue}
          className={`chatbox-action ${formValue ? "active" : ""}`}
        >
          <i className="fa fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}
