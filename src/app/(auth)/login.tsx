import { KonkhmerSleokchher_400Regular, useFonts } from '@expo-google-fonts/konkhmer-sleokchher';
import { Feather } from '@expo/vector-icons'; // for eye icon
import Checkbox from 'expo-checkbox';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './styles';



interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function LoginScreen() {
  const router = useRouter();
  
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login data:', data);
    Alert.alert('Login', 'Login functionality would be implemented here');
  };
  let [fontsLoaded] = useFonts({
    KonkhmerSleokchher_400Regular
  });

    if (!fontsLoaded) {
      return null; // or a loading screen
    }

  return (
    <SafeAreaView style={styles.container}>
      {/* Top decorative header */}
      <View style={styles.header}>
        <View style={styles.headerEllipse1}></View>
        <View style={styles.headerEllipse2}></View>
        <View style={styles.headerCard}>
          <Text style={styles.headerText}>Login</Text>
        </View>
      </View>

      {/* Form content */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          name="email"
          rules={{ required: 'Email is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor="#ccc"
              style={styles.input}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

        <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
        <View style={styles.passwordContainer}>
          <Controller
            control={control}
            name="password"
            rules={{ required: 'Password is required' }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Enter Password"
                placeholderTextColor="#ccc"
                style={styles.input}
                secureTextEntry={!showPassword}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Feather name={showPassword ? 'eye' : 'eye-off'} size={18} color="#fff" />
          </TouchableOpacity>
        </View>
        {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

        <View style={styles.row}>
          <View style={styles.checkboxContainer}>
            <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? '#4630EB' : undefined}/>
          <Text style={styles.checkboxPlaceholder}> Remember Me</Text>
          </View>
          <TouchableOpacity onPress={() => Alert.alert('Forgot Password')}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        >
          <Text style={styles.loginButtonText}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text style={styles.linkCenter}>No Account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
