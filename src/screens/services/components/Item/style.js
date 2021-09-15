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
  price: {
    color: colors.purple,
    ...f16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  description: {
    color: colors.dark,
    textAlign: 'justify'
  },
  cart: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },
  cart_info: {
    maxWidth: '50%',
    display: 'flex',
    flexDirection: 'column'
  },
  cart_info_quantity: {
    display: 'flex',
    flexDirection: 'row'
  }
})