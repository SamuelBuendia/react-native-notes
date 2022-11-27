import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 70
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: colors.black
  }
})
