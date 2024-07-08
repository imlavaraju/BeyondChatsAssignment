import React from "react";

const Chat = ({ chat, messages, closeChat }) => {
  return (
    <div className="chat">
      <div className="chat-header">
        <button className="back-button" onClick={closeChat}>
          ←
        </button>
        <div className="profile-icon">
          {chat.creator.name ? chat.creator.name[0] : "U"}
        </div>
        <h3>{chat.creator.name || "Unknown User"}</h3>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <div
              className={` ${
                message.sender_id === chat.creator.id ? "sent" : "received"
              }`}
            >
              <p>{message.message}</p>
              <span className="message-time">
                {new Date(message.created_at).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;
