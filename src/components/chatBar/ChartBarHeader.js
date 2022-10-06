import React from "react";
import './ChartBarHeader.css';
import { AccountCircle, Phone, Videocam, Search, MoreHoriz } from "@mui/icons-material";

const ChartBarHeader = () => {

    const customStyle = {
        fontSize: '50px',
        color: '#bfbfbf',
        marginLeft: '1rem'
    };

    return (
        <header className="chartbar_header">
            <AccountCircle sx={customStyle} />
            <div className="charbar_icons">
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

export default ChartBarHeader;
