import { Stack } from 'expo-router';
import React from 'react';

const AuthStack = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
          presentation: 'modal',
        }}
      >
        <Stack.Screen name="welcome" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="phone" />
        <Stack.Screen name="otp" />
      </Stack>
    </>
  )
}

export default AuthStack