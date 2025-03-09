import React from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { createStyles } from './styles';
import { IMAGES, ANIMATION, Tab } from '../../constants';

interface MainContentProps {
  currentTab: Tab;
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  scaleValue: Animated.Value;
  mainContentOffsetX: Animated.Value;
  mainContentOffsetY: Animated.Value;
  closeButtonOffset: Animated.Value;
  rotateValue: Animated.Value;
  drawerAnimValue: Animated.Value;
  handleDrawerOpen: () => void;
}

const MainContent: React.FC<MainContentProps> = ({
  currentTab,
  showMenu,
  setShowMenu,
  scaleValue,
  mainContentOffsetX,
  mainContentOffsetY,
  closeButtonOffset,
  rotateValue,
  drawerAnimValue,
  handleDrawerOpen
}) => {
  const styles = createStyles(showMenu);
  
  return (
    <Animated.View style={[
      styles.container,
      {
        transform: [
          { scale: scaleValue },
          { translateX: mainContentOffsetX },
          { translateY: mainContentOffsetY },
          { rotate: rotateValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', ANIMATION.rotation.degrees]
            })
          }
        ]
      }
    ]}>
      <Animated.View style={{
        transform: [{
          translateY: closeButtonOffset
        }]
      }}>
        <View style={styles.menuRow}>
          <TouchableOpacity
            onPress={handleDrawerOpen}>
            <Image source={showMenu ? IMAGES.close : IMAGES.menu} style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{currentTab.title}</Text>
        </View>

        {/* <Text style={styles.titleText}>{currentTab}</Text> */}

        <View style={styles.contentView}>
          {/* Main content goes here */}
        </View>

      </Animated.View>
    </Animated.View>
  );
};

export default MainContent; 