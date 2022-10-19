import React from "react";
import './ChatBarHeader.css';
import { AccountCircle, Phone, Videocam, Search, MoreHoriz } from "@mui/icons-material";

const ChatBarHeader = () => {

    const customStyle = {
        fontSize: '50px',
        color: '#bfbfbf',
        marginLeft: '1rem'
    };

    return (
        <header className="chatbar_header">
            <AccountCircle sx={customStyle} />
            <div className="chatbar_icons">
                <div>
                    <Videocam />
                    <Phone />
                </div>
                <div>
                    <Search />
                    <MoreHoriz />
                </div>
            </div>
        </header>
    )
};

export default ChatBarHeader;
