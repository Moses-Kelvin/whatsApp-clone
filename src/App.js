import React from 'react';
import ChatBar from "./components/chatBar/ChatBar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';
import { useRoutes } from 'react-router-dom';
import ChatHome from './components/chatBar/ChatHome';

const App = () => {

    const element = useRoutes([
        { path: '/', element: <ChatHome /> },
        { path: '/rooms/:roomId', element: <ChatBar /> }
    ]);

    return (
        <main className="main">
            <Sidebar />
            {element}
        </main>
    )
}

export default App;