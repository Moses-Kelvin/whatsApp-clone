import React from "react";
import './ChartBarFooter.css';
import { SentimentSatisfied, KeyboardVoice, AttachFile } from '@mui/icons-material';

const ChartBarFooter = () => {
    return (
        <footer className="chartBar_footer">
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

export default ChartBarFooter;