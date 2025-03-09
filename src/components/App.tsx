import React, { useRef, useState, useCallback } from 'react';
import { Animated, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Drawer from './Drawer';
import MainContent from './MainContent';
import { COLORS, ROUTES, ANIMATION } from '../constants';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(ROUTES[0]);
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...
  const mainContentOffsetX = useRef(new Animated.Value(0)).current;
  const mainContentOffsetY = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const drawerAnimValue = useRef(new Animated.Value(100)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;

  // Handle opening the drawer and running all animations
  const toggleDrawer = useCallback(() => {
    // Scale animation
    Animated.timing(scaleValue, {
      toValue: showMenu ? ANIMATION.scale.normal : ANIMATION.scale.reduced,
      duration: ANIMATION.duration.medium,
      useNativeDriver: true
    }).start();

    // Horizontal slide animation
    Animated.timing(mainContentOffsetX, {
      toValue: showMenu ? 0 : ANIMATION.offset.mainContentX,
      duration: ANIMATION.duration.medium,
      useNativeDriver: true
    }).start();

    // Vertical offset animation
    Animated.timing(mainContentOffsetY, {
      toValue: showMenu ? 0 : ANIMATION.offset.mainContentY, 
      duration: ANIMATION.duration.medium,
      useNativeDriver: true
    }).start();

    // Close button animation
    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? ANIMATION.offset.closeButton : 0,
      duration: ANIMATION.duration.medium,
      useNativeDriver: true
    }).start();

    // Drawer animation
    Animated.timing(drawerAnimValue, {
      toValue: !showMenu ? ANIMATION.offset.drawer : 0,
      duration: ANIMATION.duration.medium,
      useNativeDriver: true
    }).start();

    // Rotation animation
    Animated.timing(rotateValue, {
      toValue: showMenu ? 0 : 1,
      duration: ANIMATION.duration.medium,
      useNativeDriver: true
    }).start();

    // Toggle menu state
    setShowMenu(!showMenu);
  }, [
    showMenu, 
    scaleValue, 
    mainContentOffsetX, 
    mainContentOffsetY, 
    closeButtonOffset, 
    drawerAnimValue, 
    rotateValue
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Drawer 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        drawerAnimValue={drawerAnimValue}
        toggleDrawer={toggleDrawer}
      />

      <MainContent
        currentTab={currentTab}
        showMenu={showMenu}
        scaleValue={scaleValue}
        mainContentOffsetX={mainContentOffsetX}
        mainContentOffsetY={mainContentOffsetY}
        closeButtonOffset={closeButtonOffset}
        rotateValue={rotateValue}
        toggleDrawer={toggleDrawer}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App; 