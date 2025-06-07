import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DrawerRoot = () => {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
        />
        <Drawer.Screen
          name="about" // This is the name of the page and must match the url from root
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default DrawerRoot