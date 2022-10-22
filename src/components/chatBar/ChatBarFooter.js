import React, { useState } from "react";
import './ChatBarFooter.css';
import { SentimentSatisfied, KeyboardVoice, AttachFile, Send } from '@mui/icons-material';
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

const ChatBarFooter = () => {

    const [userInput, setUserInput] = useState('');

    const { roomId } = useParams();

    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    };

    const isTyping = !!userInput;

    const sendMessage =  async () => {
        await addDoc(collection(db, "Rooms", roomId, "messages"),  { 
            message: userInput,
            sentAt:  serverTimestamp()
          });
           setUserInput("");
    };

    return (
        <footer className="chatBar_footer">
            <div>
                <SentimentSatisfied />
                <AttachFile />
            </div>
            <form>
                <input type="text" 
                placeholder="Type a message" 
                onChange={handleInputChange} 
                value={userInput} />
               {isTyping ? <Send onClick={sendMessage}/> : <KeyboardVoice />}
            </form>
        </footer>
    )
};

export default ChatBarFooter;