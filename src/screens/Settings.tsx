import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { COLORS } from '../constants';

interface Props {
  // Add props as needed
}

const Settings: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="cog" size={50} color={COLORS.menuText} />
      </View>
      <Text style={styles.description}>Welcome to the Settings screen!</Text>
    </View>
  );
};

export default Settings; 