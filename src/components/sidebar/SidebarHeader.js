import React from "react";

import './SidebarHeader.css';

import { AccountCircle, DonutLarge, MoreHoriz, Add } from "@mui/icons-material";

const SidebarHeader = () => {
    return (
        <header className="sidebar_header">
            <div>
                <AccountCircle sx={{ fontSize: '50px', color: '#bfbfbf' }} />
            </div>
            <div>
                <DonutLarge />
                <Add />
                <MoreHoriz />
            </div>
        </header>
    )
};

export default SidebarHeader;