import React from 'react';
import { Box, Typography } from '@mui/material';
import PreferenceSetting from './PreferenceSetting';
const Settings = () => {
    return (
        <Box>
            <PreferenceSetting/>
            {/* <Typography  sx={{color: 'white',fontSize: '20px',textAlign: 'center',fontWeight: 500,margin: '40px'}}>Settings Page</Typography> */}
        </Box>
    )
}

export default Settings;