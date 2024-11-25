import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#1F1E25',
    borderRadius: 8,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#31CF67',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 36,
    marginBottom: 42,
    gap: 16
  },
  listEmptyComponent: {
    color: '#6B6B6B',
    fontSize: 14,
    textAlign: 'center',
    flexWrap: 'wrap',
    marginTop: 24
  }
})