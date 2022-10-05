import React from "react";
import Chats from "../chats/Chats";
import Sidebar from "../sidebar/Sidebar";
import  './Main.css';
 
const Main = () => {
  return (
    <main className="main">
          <Sidebar />
          <Chats />
    </main>
  )
};

export default Main;