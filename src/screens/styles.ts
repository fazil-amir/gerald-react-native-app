import { StyleSheet } from 'react-native';
import { LAYOUT, FONTS, COLORS } from '../constants';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: LAYOUT.margin.extraLarge,
    padding: LAYOUT.padding.large,
    borderWidth: 1,
    borderRadius: LAYOUT.borderRadius.medium,
    borderColor: COLORS.menuText,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  description: {
    fontSize: FONTS.sizes.large,
    color: COLORS.menuText,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: LAYOUT.margin.medium,
  },
});

export default styles;
