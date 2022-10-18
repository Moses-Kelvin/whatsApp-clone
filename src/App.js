import React from 'react';
import ChatBar from "./components/chatBar/ChatBar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';
import { useRoutes } from 'react-router-dom';
import ChartBarBody from './components/chatBar/ChartBarBody';


const App = () => {

    const element = useRoutes([
        {
            path: '/', element: <ChatBar />,
            children: [
                { path: 'rooms/:roomId', element: <ChartBarBody /> }
            ]
        }
    ]);

    return (
        <main className="main">
            <Sidebar />
            {element}
        </main>
    )
}

export default App;