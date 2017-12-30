import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  marker: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 3,
    borderColor: colors.white,
    backgroundColor: colors.white,
  },

});

export default styles;
