import { Tabs } from 'expo-router';
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import React from 'react';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:"blue"
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <MaterialIcons name='home-filled' size={30}/>
        }}
      />
    </Tabs>
  );
}
