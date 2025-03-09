import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Status from './Status';
import Community from './Community';
import Chats from './Chats';
import Settings from './Settings';
import { getTabIcon, TabScreenName } from '../utils/tabIcons';
import { COLORS } from '../constants';

interface Props {
  // Add props as needed
}

const Tab = createBottomTabNavigator();

const Start: React.FC<Props> = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.highlightedButton,
        tabBarInactiveTintColor: COLORS.white,
        tabBarStyle: {
          backgroundColor: COLORS.drawerBackground,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: .2,
          height: 75,
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = getTabIcon(route.name as TabScreenName);
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        sceneContainerStyle: { backgroundColor: 'transparent' },
        cardStyle: { backgroundColor: 'transparent' },
        detachInactiveScreens: false
      })}
    >
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Start; 