import { Tabs } from 'expo-router'
import React from 'react'

const TabRoot = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{title:"Home"}}/>
        <Tabs.Screen name="about" options={{title:"About"}}/>
        <Tabs.Screen name="profile" options={{title:"Profile"}}/>
    </Tabs>
  )
}

export default TabRoot