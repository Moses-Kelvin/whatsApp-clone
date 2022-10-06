import React from "react";
import ChatBar from "../chatBar/ChatBar";
import Sidebar from "../sidebar/Sidebar";
import  './Main.css';
 
const Main = () => {
  return (
    <main className="main">
          <Sidebar />
          <ChatBar />
    </main>
  )
};

export default Main;