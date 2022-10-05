import React from 'react';

import './SidebarForm.css';

import { Search, FilterList } from '@mui/icons-material';

import { TextField } from '@mui/material';


const SidebarForm = () => {
    return (
        <div className="sidebarForm-container">
            <div className="sidebarForm">
                <Search sx={{ padding: '0 1rem' }} />
                <TextField id="standard-basic"
                    placeholder="Search or start a chat"
                    variant="standard" />
            </div>
            <div>
                <FilterList />
            </div>
        </div>
    )
};

export default SidebarForm;