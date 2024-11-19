import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar 
            position="sticky"
            sx={{ width: '100%' }}
        >
            <Toolbar>
                <h3>
                    Global Company Owner Dashboard
                </h3>
            </Toolbar>
        </AppBar>
    );
};

export default Header;