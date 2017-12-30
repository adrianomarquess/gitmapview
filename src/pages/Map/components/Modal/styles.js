import { StyleSheet } from 'react-native';
import { colors, fonts, general } from 'styles';

const styles = StyleSheet.create({

  modal: {
    margin: 0,
    backgroundColor: colors.transparent,
  },

  modalContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: general.radius,
  },

  modalTitle: {
    fontSize: fonts.big,
    color: colors.dark,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    borderColor: colors.light,
    marginTop: 20,
    borderRadius: general.radius,
    fontSize: fonts.regular,
    paddingHorizontal: 20,
    height: 40,
    borderWidth: 1,
  },

  buttonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: general.radius,
  },

  buttonSecondary: {
    marginRight: 7.5,
    backgroundColor: colors.secondary,
  },

  buttonPrimary: {
    marginLeft: 7.5,
    backgroundColor: colors.primary,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
