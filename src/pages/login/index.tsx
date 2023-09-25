import React from 'react';
import { Box, Typography } from '@mui/material';
import Registration from "./Registration";
import SignIn from './SignIn';
import SignInWithKey from "./SignInWithKey";
import SignUp from './SignUp';
import DisplaySeed from './DisplaySeed';

const Login = () => {
    return (
        <Box
        // display="flex"
        // alignItems="center"
        // justifyItems="center"
        // sx={{width:'100%',height:'100%'}}
        >
            {/* <Typography  sx={{color: 'white',fontSize: '20px',textAlign: 'center',fontWeight: 500,margin: '40px'}}>Login Page</Typography> */}
            <Registration />
        {/* <SignIn />
        <SignInWithKey />
        <SignUp />
        <DisplaySeed /> */}
        </Box>
    )
}

export default Login;