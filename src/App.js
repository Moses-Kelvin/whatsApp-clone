import React from 'react';
import ChatBar from "./components/chatBar/ChatBar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';


const App = () => {
    return (
        <main className="main">
            <Sidebar />
            <ChatBar />
        </main>
    )
}

export default App;