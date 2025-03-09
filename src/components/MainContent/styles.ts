import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { COLORS, FONTS, LAYOUT, ANIMATION } from '../../constants';

type MainContentStylesType = {
  container: ViewStyle;
  contentView: ViewStyle;
  menuRow: ViewStyle;
  menuIcon: ImageStyle;
  headerText: TextStyle;
  titleText: TextStyle;
}

export const createStyles = (showMenu: boolean) => StyleSheet.create<MainContentStylesType>({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: LAYOUT.padding.extraLarge,
    borderTopLeftRadius: LAYOUT.borderRadius.extraLarge
  },
  contentView: {
    flex: 1
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: LAYOUT.padding.extraLarge - 2, // 30
  },
  menuIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.menuText,
  },
  headerText: {
    paddingLeft: LAYOUT.padding.medium,
    color: COLORS.menuText,
    fontSize: FONTS.sizes.large,
    letterSpacing: FONTS.letterSpacing.wide,
    textTransform: 'uppercase'
  },
  titleText: {
    fontSize: FONTS.sizes.extraLarge,
    fontWeight: FONTS.weights.bold as 'bold',
    color: COLORS.black,
    paddingTop: LAYOUT.padding.large - 4 // 20
  }
}); 