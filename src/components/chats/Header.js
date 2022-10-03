import React from "react";

import classes from '../../styles/Header.module.css';

import { AccountCircle, DonutLarge, MoreHoriz, Add } from "@mui/icons-material";

const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <AccountCircle sx={{ fontSize: '40px', color: '#bfbfbf' }} />
            </div>
            <div>
                <DonutLarge />
                <Add />
                <MoreHoriz />
            </div>
        </header>
    )
};

export default Header;