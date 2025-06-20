import RadialGradientBackground from '@/src/components/atoms/RadialGradientBackground'; // adjust path if needed
import imagePath from '@/src/constants/imagePaths';
import { Italiana_400Regular, useFonts } from '@expo-google-fonts/italiana';
import { JacquesFrancois_400Regular } from '@expo-google-fonts/jacques-francois/400Regular';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const auth = () => {
  const [isLoading,setIsLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    Italiana_400Regular,
    JacquesFrancois_400Regular
  });
  
  let loading_timeout =()=>{
    setIsLoading(true);
    setTimeout(() => {
     router.push('/(auth)/login');
    }, 3000);
  }
  
  useEffect(() => {
    setTimeout(loading_timeout, 2000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
    <RadialGradientBackground />
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.textBox} numberOfLines={1}><Text style={styles.textStyle1}>THE WORLD OF BOUTIQUE</Text>
        <Text style={styles.textStyle2}> EVENTS...</Text></Text>
        <Image source={imagePath.logo} style={styles.logo_style} />
      </View>
      <View style={styles.loader}> 
        {isLoading? <><ActivityIndicator color={"white"} size={50}/></> : null}
      </View>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  loader:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_style: {
    width: '90%',
    height: '25%',
    resizeMode: 'contain',
  },
  textBox:{
    position: 'relative',
    fontSize: 20,
    display: 'flex',
  },
  textStyle1: { 
    fontFamily: 'Italiana_400Regular',
    color: 'white',
  } ,
  textStyle2: { 
    fontFamily: 'JacquesFrancois_400Regular',
    color: 'white',
  } 
});

export default auth;
