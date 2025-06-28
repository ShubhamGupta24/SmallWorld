import RadialGradientBackground from '@/src/components/atoms/RadialGradientBackground';
import { KonkhmerSleokchher_400Regular, useFonts } from '@expo-google-fonts/konkhmer-sleokchher';
import { AntDesign, Feather } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export default function SignUpScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log('Sign Up data:', data);
    Alert.alert('Sign Up', 'Sign Up functionality would be implemented here');
  };

  const [fontsLoaded] = useFonts({
    KonkhmerSleokchher_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <RadialGradientBackground />
      <SafeAreaView style={styles.container}>
        {/* Decorative Header */}
        <View style={styles.header}>
          <View style={styles.headerEllipse1} />
          <View style={styles.headerEllipse2} />
          <View style={styles.headerCard}>
            <Text style={styles.headerText}>Sign Up</Text>
          </View>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          {/* Name */}
          <Text style={styles.label}>Name</Text>
          <Controller
            control={control}
            name="name"
            rules={{ required: 'Name is required' }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Enter your full name"
                placeholderTextColor="#ccc"
                style={styles.input}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

          {/* Email */}
          <Text style={[styles.label, { marginTop: 20 }]}>Email</Text>
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

          {/* Password */}
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

          {/* Sign Up Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            <Text style={styles.loginButtonText}>
              {isSubmitting ? 'Signing up...' : 'Sign Up'}
            </Text>
          </TouchableOpacity>

          {/* Navigate to Login */}
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.linkCenter}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>

        {/* OR Divider */}
        <View style={styles.divider}>
          <View style={styles.lines} />
          <Text style={styles.continue}>or Continue With</Text>
          <View style={styles.lines} />
        </View>

        {/* Social Icons */}
        <View style={styles.socialIconsContainer}>
          {/* Facebook */}
          <TouchableOpacity onPress={() => Alert.alert('Facebook pressed')}>
            <Entypo name="facebook" size={40} color="#1877F2" />
          </TouchableOpacity>

          {/* Instagram */}
          <TouchableOpacity onPress={() => Alert.alert('Instagram pressed')}>
            <LinearGradient
              colors={['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5']}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.linearGradient}
            >
              <Entypo name="instagram" size={28} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>

          {/* Google */}
          <TouchableOpacity onPress={() => Alert.alert('Google pressed')}>
            <View style={styles.googleIconContainer}>
              <AntDesign name="google" size={24} color="#DB4437" />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
