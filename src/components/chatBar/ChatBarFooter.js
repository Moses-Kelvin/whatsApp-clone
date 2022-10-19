import React from "react";
import './ChatBarFooter.css';
import { SentimentSatisfied, KeyboardVoice, AttachFile } from '@mui/icons-material';

const ChatBarFooter = () => {
    return (
        <footer className="chatBar_footer">
            <div>
                <SentimentSatisfied />
                <AttachFile />
            </div>
            <form>
                <input type="text" placeholder="Type a message" />
                <KeyboardVoice />
            </form>
        </footer>
    )
};

export default ChatBarFooter;