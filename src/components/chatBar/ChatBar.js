import React from "react";
import ChatBarBody from "./ChatBarBody";
import ChatBarFooter from "./ChatBarFooter";
import ChatBarHeader from "./ChatBarHeader";
import './ChatBar.css';

const ChatBar = () => {
   
     return (
        <section className="chatBar_section">
           <ChatBarHeader />
           <ChatBarBody />
           <ChatBarFooter />
        </section>
     )
};

export default ChatBar;