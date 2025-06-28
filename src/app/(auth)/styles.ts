import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0b0424',
  },
  header: {
    height: moderateScale(moderateScale(200)),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    top: moderateScale(30),
    marginBottom: moderateScale(20),
  },
  headerEllipse1: {
    position: 'absolute',
    top: moderateScale(-50),
    left: moderateScale(-50),
    width: moderateScale(200),
    height: moderateScale(200),
    borderRadius: moderateScale(100),
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
  },
  headerEllipse2: {
    position: 'absolute',
    top: moderateScale(-30),
    right: moderateScale(-30),
    width: moderateScale(160),
    height: moderateScale(170),
    borderRadius: moderateScale(75),
    backgroundColor: '#FFFFFF',
    opacity: 0.9,
  },
  headerCard: {
    position: 'absolute',
    width: moderateScale(250),
    height: moderateScale(170),
    top: moderateScale(-76),
    left: moderateScale(70),
    borderRadius: moderateScale(29),
    transform: [{ rotate: '20deg' }],
    backgroundColor: '#D1D1FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    top: moderateScale(30),
    fontSize: moderateScale(40),
    color: 'black',
    transform: [{ rotate: '-20deg' }],
    fontFamily: 'KonkhmerSleokchher_400Regular',
  },
  formContainer: {
    paddingHorizontal: moderateScale(24),
    marginTop: moderateScale(35),
    flexDirection: 'column',
    gap: moderateScale(6),
  },
  label: {
    color: '#fff',
    fontSize: moderateScale(14),
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
    marginVertical: moderateScale(20),
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
    borderRadius: moderateScale(20),
    paddingVertical: moderateScale(12),
    alignItems: 'center',
    width: '100%',
  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  linkCenter: {
    color: '#D1D1FF',
    textAlign: 'center',
    marginTop: moderateScale(15),
    fontSize: 14,
  },
  divider:{
    alignItems: 'center',
    marginVertical: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  lines:{ flex: 1, height: 1, backgroundColor: '#ccc' },
  continue:{ marginHorizontal: moderateScale(10), color: '#888' },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  linearGradient: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(22.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIconContainer: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(22.5),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  }
});


export default styles;