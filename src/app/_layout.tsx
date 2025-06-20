import { Redirect, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';


const RootLayout = () => {
  const [isLogin,setIsLogin] = useState(true)
  
  SplashScreen.preventAutoHideAsync();
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
      setIsLogin(false); // Simulate login state change
    }, 2000);
  }, []);

  return (

    <>
    <Stack screenOptions={{headerShown : false}}/>
      {
        isLogin ? (
          <Redirect href={"./(main)"} />
        ) : (
          <Redirect href={"./(auth)"} />
        )
      }
    </>
  )
}

export default RootLayout;