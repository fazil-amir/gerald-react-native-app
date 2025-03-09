import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { styles, getTabStyles } from './styles';
import { ROUTES, APP_INFO, Tab } from '../../constants';

interface DrawerProps {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
  drawerAnimValue: Animated.Value;
  toggleDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ 
  currentTab, 
  setCurrentTab, 
  drawerAnimValue,
  toggleDrawer
}) => {
  return (
    <Animated.View style={[
      styles.container,
      {
        transform: [{
          translateY: drawerAnimValue,
        }]
      }
    ]}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>{APP_INFO.name}</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.tabContainer}>
        {ROUTES.map(route => ((
            <TouchableOpacity 
              key={route.id}
              style={getTabStyles(route.id, currentTab)}
              onPress={() => {
                setCurrentTab(route);
                toggleDrawer();
              }}
            >
              <Text style={styles.highlightedText} numberOfLines={1}>{route.title}</Text>
            </TouchableOpacity>
          )
        ))}
      </View>

      {/* Sign Out */}
      <View style={styles.logoutContainer}>
        <View style={styles.separator} /> 
        <TouchableOpacity 
          style={getTabStyles(null)}
          onPress={() => {
            // Placeholder for logout functionality
          }}
        >
          <Text style={styles.highlightedText} numberOfLines={1}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Drawer; 