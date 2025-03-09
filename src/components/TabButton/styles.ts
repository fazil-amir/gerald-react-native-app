import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from 'react-native';
import { COLORS, FONTS, LAYOUT } from '../../constants';

type TabButtonStyles = {
  container: ViewStyle;
  icon: ImageStyle;
  text: TextStyle;
}

export const createStyles = (currentTab: string, title: string): TabButtonStyles => StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: COLORS.transparent,
    paddingLeft: LAYOUT.padding.small,
    paddingRight: LAYOUT.padding.small,
    marginBottom: 20
  },
  icon: {
    width: 20, 
    height: 20,
    tintColor: COLORS.white,
    marginRight: 10,
    opacity: 0.8
  },
  text: {
    fontSize: FONTS.sizes.medium,
    fontWeight: currentTab === title ? FONTS.weights.bold as 'bold' : 'normal',
    color: COLORS.white,
  }
}); 