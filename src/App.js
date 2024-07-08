import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";
import "./App.css";
import { VscMenu } from "react-icons/vsc";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [dark, setDark] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const openChat = (chat) => {
    setSelectedChat(chat);
    fetch(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chat.id}`
    )
      .then((response) => response.json())
      .then((data) => setMessages(data.data))
      .catch((error) => console.error("Error fetching chat messages:", error));

    if (window.innerWidth < 768) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    fetch("https://devapi.beyondchats.com/api/get_all_chats?page=1")
      .then((response) => response.json())
      .then((data) => setChats(data.data.data))
      .catch((error) => console.error("Error fetching chat data:", error));
  }, []);

  return (
    <div className={` ${dark ? "darkmode" : "app"} `}>
      <header className="app-header">
        <button onClick={toggleNav} className="nav-toggle">
          <VscMenu />
        </button>
        <h1>Telegram</h1>
      </header>
      <Nav
        isOpen={isNavOpen}
        toggleNav={toggleNav}
        dark={dark}
        setDark={setDark}
      />
      <main className={`app-content ${selectedChat ? "chat-selected" : ""}`}>
        <ChatList chats={chats} openChat={openChat} />
        {selectedChat && (
          <Chat
            chat={selectedChat}
            messages={messages}
            closeChat={() => setSelectedChat(null)}
          />
        )}
      </main>
    </div>
  );
};

export default App;
