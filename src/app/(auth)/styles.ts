import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0424',
  },
  header: {
    height: 200,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
    marginBottom: 20,
  },
  headerEllipse1: {
    position: 'absolute',
    top: -50,
    left: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
  },
  headerEllipse2: {
    position: 'absolute',
    top: -30,
    right: -30,
    width: 160,
    height: 170,
    borderRadius: 75,
    backgroundColor: '#FFFFFF',
    opacity: 0.9,
  },
  headerCard: {
    position: 'absolute',
    width: 250,
    height: 170,
    top: -76,
    left: 70,
    borderRadius: 29,
    transform: [{ rotate: '20deg' }],
    backgroundColor: '#D1D1FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    top: 30,
    fontSize: 40,
    color: 'black',
    transform: [{ rotate: '-20deg' }],
    fontFamily: 'KonkhmerSleokchher_400Regular',
  },
  formContainer: {
    paddingHorizontal: 24,
    marginTop: 40,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    color: '#fff',
    paddingVertical: 8,
    width: '100%',
    marginTop: 4,
    fontSize: 14,
  }, 
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  error: {
    color: '#ff4d4d',
    fontSize: 12,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  checkboxContainer: {
    flexDirection: 'row', 
  },
  checkbox: {
    color: '#fff',
    backgroundColor: 'transparent',
  },
  checkboxPlaceholder: {
    color: '#fff',
    fontSize: 14,
  },
  link: {
    color: '#D1D1FF',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#D6D6FF',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkCenter: {
    color: '#D1D1FF',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
});


export default styles;