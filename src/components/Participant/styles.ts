import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    padding: 15,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#E23C44',
    justifyContent: 'center',
    alignItems: 'center',
  },
})