import { StyleSheet } from 'react-native'
import { colors } from '../../../../../global-style'

const f16 = {
  fontSize: 16
}
export default StyleSheet.create({
  item: {
    borderBottomColor: '#c5c5c5',
    borderBottomWidth: 2,
    paddingVertical: 5
  },
  name: {
    color: colors.orange,
    ...f16,
    fontWeight: 'bold',
  },
  ocult: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textPurple: {
    color: colors.purple,
    ...f16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  description: {
    color: colors.dark,
    textAlign: 'justify'
  },
})