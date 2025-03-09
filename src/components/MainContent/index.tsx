import React from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { createStyles } from './styles';
import { IMAGES, ANIMATION, Tab } from '../../constants';

interface MainContentProps {
  currentTab: Tab;
  showMenu: boolean;
  scaleValue: Animated.Value;
  mainContentOffsetX: Animated.Value;
  mainContentOffsetY: Animated.Value;
  closeButtonOffset: Animated.Value;
  rotateValue: Animated.Value;
  toggleDrawer: () => void;
}

const MainContent: React.FC<MainContentProps> = ({
  currentTab,
  showMenu,
  scaleValue,
  mainContentOffsetX,
  mainContentOffsetY,
  closeButtonOffset,
  rotateValue,
  toggleDrawer
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
            onPress={toggleDrawer}>
            <Image source={showMenu ? IMAGES.close : IMAGES.menu} style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{currentTab.title}</Text>
        </View>

        <View style={styles.contentView}>
          {/* Main content goes here */}
        </View>

      </Animated.View>
    </Animated.View>
  );
};

export default MainContent; 