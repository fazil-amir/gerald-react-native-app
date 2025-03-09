import React from 'react';
import { Image, Text, TouchableOpacity, View, ImageSourcePropType } from 'react-native';
import { createStyles } from './styles';

interface TabButtonProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  title: string;
  image: ImageSourcePropType;
}

const TabButton: React.FC<TabButtonProps> = ({ currentTab, setCurrentTab, title, image }) => {
  const styles = createStyles(currentTab, title);
  
  return (
    <TouchableOpacity onPress={() => {
      if (title === "LogOut") {
        // Handle logout functionality
      } else {
        setCurrentTab(title);
      }
    }}>
      <View style={styles.container}>
        <Image source={image} style={styles.icon} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabButton; 