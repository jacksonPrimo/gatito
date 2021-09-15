import { StyleSheet } from 'react-native'

const f16 = {
  fontSize: 16
}
export default StyleSheet.create({
  list: {
    padding: 24,
    ...f16
  },
  title_page: {
    textAlign: 'center',
    fontSize: 18,
    color: '#a5a5a5' 
  },
})