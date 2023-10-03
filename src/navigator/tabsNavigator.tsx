import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusScreen } from '../screens/Status/StatusScreen';
import { CallsScreen } from '../screens/Calls/CallsScreen';
import { CameraScreen } from '../screens/Camera/CameraScreen';
import { ChatsScreen } from '../screens/Chats/ChatsScreen';
import { SettingsScreen } from '../screens/Settings/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const MainTabNavigator = () => {
  const insets = useSafeAreaInsets();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={'ChatsScreen'}
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        }
      }}
    >
      <Tab.Screen
        name={'StatusScreen'}
        component={StatusScreen}
        options={{
          title: 'Updates',
          tabBarIcon: ({ color, size }) =>
          <Ionicons name={'logo-whatsapp'} color={color} size={size} />
        }}
      />
      <Tab.Screen
        name={'CallsScreen'}
        component={CallsScreen}
        options={{
          title: 'Calls',
          tabBarIcon: ({ focused, color, size }) =>
          <Ionicons name={focused ? 'call' : 'call-outline'} color={color} size={size} />
        }}
      />
      <Tab.Screen
        name={'CameraScreen'}
        component={CameraScreen}
        options={{
          title: 'Camera',
          tabBarIcon: ({ focused, color, size }) =>
          <Ionicons name={focused ? 'camera' : 'camera-outline'} color={color} size={size} />
        }}
      />
      <Tab.Screen
        name={'ChatsScreen'}
        component={ChatsScreen}
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused, color, size }) =>
          <Ionicons name={focused ? 'ios-chatbubbles-sharp' : 'ios-chatbubbles-outline'} color={color} size={size} />
        }}
      />
      <Tab.Screen
        name={'SettingsScreen'}
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused, color, size }) =>
          <Ionicons name={focused ? 'cog' : 'cog-outline'} color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
};
