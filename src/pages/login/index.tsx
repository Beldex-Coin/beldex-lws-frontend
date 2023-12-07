import React, {useEffect} from 'react';
// import { Box, Typography } from '@mui/material';
import Registration from "./Registration";

// import coreBridgeInstance from '@bdxi/beldex-app-bridge';
// import SignUp from './SignUp';
// import DisplaySeed from './DisplaySeed';
// import AuthSeed from "./AuthSeed";

const Home = () => {
  
  useEffect(() => {initialSetUp()}, []);

  const initialSetUp = async () => {
    // const coreBridgeInstance = await require('@bdxi/beldex-app-bridge')({});
    // console.log('---coreBridgeInstance---', coreBridgeInstance)
    
  }

  return (
      <Registration />
  )
}

export default Home;