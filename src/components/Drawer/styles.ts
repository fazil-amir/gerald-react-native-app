import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS, FONTS, LAYOUT, Tab } from '../../constants';

type DrawerStylesType = {
  container: ViewStyle;
  logoContainer: ViewStyle;
  logoText: TextStyle;
  tabContainer: ViewStyle;
  separator: ViewStyle;
  logoutContainer: ViewStyle;
  highlightedText: TextStyle;
}

// Create highlighted tab style dynamically
export const getTabStyles = (title: string | null, currentTab?: Tab): ViewStyle => ({
  backgroundColor: title === currentTab?.id ? COLORS.highlightedButton : COLORS.drawerBackground,
  borderRadius: LAYOUT.borderRadius.medium,
  padding: LAYOUT.padding.medium,
  marginBottom: LAYOUT.margin.medium,
  opacity: title === currentTab?.id ? .8 : 1,
});

export const styles = StyleSheet.create<DrawerStylesType>({
  container: {
    justifyContent: 'flex-start', 
    padding: LAYOUT.padding.medium, 
    backgroundColor: COLORS.drawerBackground,
    flexGrow: 1, 
    width: '100%', 
    borderTopLeftRadius: LAYOUT.borderRadius.extraLarge,
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0,
    paddingRight: '50%'
  },
  logoContainer: {
    marginTop: LAYOUT.margin.large * 2,
    marginBottom: LAYOUT.margin.large * 2,
    alignItems: 'center',
  },
  logoText: {
    fontSize: FONTS.sizes.extraLarge,
    fontWeight: FONTS.weights.bold as 'bold',
    color: COLORS.white,
    marginTop: LAYOUT.margin.large
  },
  tabContainer: {},
  separator: {
    height: 1,
    backgroundColor: COLORS.separator,
    marginVertical: LAYOUT.margin.extraLarge,
  },
  logoutContainer: {},
  logoutText: {
    color: COLORS.white,
    fontSize: FONTS.sizes.medium,
  },
  highlightedText: {
    color: COLORS.white,
    fontSize: FONTS.sizes.medium,
  }
}); 