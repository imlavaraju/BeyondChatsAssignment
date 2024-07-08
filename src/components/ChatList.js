import React from "react";

const ChatList = ({ chats, openChat }) => {
  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <div key={chat.id} className="chat-item" onClick={() => openChat(chat)}>
          <div className="profile-icon">
            {chat.creator.name ? chat.creator.name[0] : "U"}
          </div>
          <div className="chat-info">
            <h3>{chat.creator.name || "Unknown User"}</h3>
            <p>{chat.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
