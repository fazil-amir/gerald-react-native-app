import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { COLORS } from '../constants';

interface Props {
  // Add props as needed
}

const Status: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="chart-timeline-variant" size={50} color={COLORS.menuText} />
      </View>
      <Text style={styles.description}>Welcome to the Status screen!</Text>
    </View>
  );
};

export default Status; 