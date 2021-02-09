import React, { useState } from "react";

import firebase from "firebase/app";
import { firestore } from "../../firebase/Firebase";
import { useSelector } from "react-redux";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ChatMessage from "./ChatMessage";

export default function Chatbox() {
  const username = useSelector((state) => state.username);

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt", "asc").limitToLast(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      user: username,
      message: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setFormValue("");
  };

  return (
    <div>
      <div>
        {messages &&
          messages.map((msg, index) => (
            <ChatMessage
              key={index}
              user={msg.user}
              message={msg.message}
              createdAt={msg.createdAt}
            />
          ))}
      </div>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Write your message"
        />
        <button type="submit" disabled={!formValue}>
          send
        </button>
      </form>
    </div>
  );
}
