import { KonkhmerSleokchher_400Regular, useFonts } from '@expo-google-fonts/konkhmer-sleokchher';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles'; // same as login styles

export default function OtpVerificationScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const [fontsLoaded] = useFonts({
    KonkhmerSleokchher_400Regular,
  });

  if (!fontsLoaded) return null;

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const finalOtp = otp.join('');
    if (finalOtp.length < 4) {
      Alert.alert('Invalid OTP', 'Please enter all 4 digits');
      return;
    }
    console.log('Entered OTP:', finalOtp);
    Alert.alert('OTP Verified', 'Proceeding to next step...');
    // router.push('/next-step');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerEllipse1} />
        <View style={styles.headerEllipse2} />
        <View style={styles.headerCard}>
          <Text style={styles.headerText}>OTP</Text>
        </View>
      </View>

      {/* OTP Inputs */}
      <View style={[styles.formContainer, { alignItems: 'center' }]}>
        <Text style={styles.label}>Enter OTP</Text>

        <View style={{ flexDirection: 'row', gap: 10, marginVertical: 20 }}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => { inputsRef.current[index] = ref; }}
              style={{
                width: 50,
                height: 50,
                borderWidth: 1,
                borderColor: '#ccc',
                textAlign: 'center',
                fontSize: 22,
                borderRadius: 8,
                color: '#fff',
              }}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Verify</Text>
        </TouchableOpacity>

        {/* Resend Option */}
        <TouchableOpacity onPress={() => Alert.alert('Resend OTP')}>
          <Text style={styles.linkCenter}>Didn’t receive OTP? Resend</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
