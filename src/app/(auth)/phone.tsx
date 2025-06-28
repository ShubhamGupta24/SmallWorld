import RadialGradientBackground from '@/src/components/atoms/RadialGradientBackground';
import { KonkhmerSleokchher_400Regular, useFonts } from '@expo-google-fonts/konkhmer-sleokchher';
import { useRouter } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles'; // reuse styles from login/signup

interface PhoneFormData {
  phone: string;
}

export default function PhoneNumberScreen() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PhoneFormData>({
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = (data: PhoneFormData) => {
    if (data.phone.length < 10) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number');
      return;
    }
    console.log('Phone Number:', data.phone);
    Alert.alert('Phone Number Received', `Proceeding with: ${data.phone}`);
    // router.push('/otp'); // Optional: move to OTP screen
  };

  const [fontsLoaded] = useFonts({
    KonkhmerSleokchher_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <RadialGradientBackground />
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerEllipse1} />
          <View style={styles.headerEllipse2} />
          <View style={styles.headerCard}>
            <Text style={styles.headerText}>Enter Phone</Text>
          </View>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <Controller
            control={control}
            name="phone"
            rules={{
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Enter a valid 10-digit phone number',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Enter your phone number"
                placeholderTextColor="#ccc"
                style={styles.input}
                keyboardType="phone-pad"
                maxLength={10}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.phone && <Text style={styles.error}>{errors.phone.message}</Text>}

          {/* Submit */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            <Text style={styles.loginButtonText}>
              {isSubmitting ? 'Submitting...' : 'Send OTP'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
