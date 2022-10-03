import React from 'react';

import classes from '../../styles/Search.module.css';

import { Search, FilterList } from '@mui/icons-material';

import { TextField } from '@mui/material';


const SearchChats = () => {
    return (
        <div className={classes['search-container']}>
            <div className={classes.search}>
                <Search sx={{ padding: '0 1rem', marginTop: '1rem' }} />
                <TextField id="standard-basic" label="Search or start a chat" variant="standard" />
            </div>
            <div>
                <FilterList />
            </div>
        </div>
    )
};

export default SearchChats;