import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.light,
    borderBottomWidth: 2,
    marginBottom: metrics.baseMargin * 2,
  },

  input: {
    height: 40,
    width: '90%',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingLeft: metrics.basePadding / 2,
    marginBottom: metrics.baseMargin * 2,
    borderColor: colors.danger,
  },

  addButton: {
    marginBottom: metrics.baseMargin * 2,
  },
});

export default styles;
