import React, {useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import Registration from "./Registration";
// import coreBridgeInstance from '@bdxi/beldex-app-bridge';
import SignUp from './SignUp';
import DisplaySeed from './DisplaySeed';
import AuthSeed from "./AuthSeed";

const Home = () => {

  useEffect(() => {initialSetUp()}, []);

  const initialSetUp = async () => {
    // const coreBridgeInstance = await require('@bdxi/beldex-app-bridge')({});
    // console.log('---coreBridgeInstance---', coreBridgeInstance)

  }

  return (
    <Box
    // display="flex"
    // alignItems="center"
    // justifyItems="center"
    // sx={{width:'100%',height:'100%'}}
    >
      {/* <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center', fontWeight: 500, margin: '40px' }}>Login Page</Typography> */}
      <Registration />
      {/* <SignUp /> */}
      {/* <DisplaySeed /> */}
      {/* <AuthSeed /> */}
    </Box>
  )
}

export default Home;