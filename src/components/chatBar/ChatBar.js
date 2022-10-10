import React from "react";
import ChartBarBody from "./ChartBarBody";
import ChartBarFooter from "./ChartBarFooter";
import ChartBarHeader from "./ChartBarHeader";
import './ChatBar.css';

const ChatBar = () => {
     return (
        <section className="chatBar_section">
           <ChartBarHeader />
           <ChartBarBody />
           <ChartBarFooter />
        </section>
     )
};

export default ChatBar;