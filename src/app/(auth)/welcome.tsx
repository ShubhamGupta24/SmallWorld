// EventsLandingPage.tsx
import AutoScrollColumn from '@/src/components/atoms/AutoScrollColumn';
import RadialGradientBackground from '@/src/components/atoms/RadialGradientBackground';
import FontAwesome6 from '@expo/vector-icons/build/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface ImageItem {
  src: string;
  alt: string;
}

const EventsLandingPage: React.FC = () => {
  const mainGalleryImages: ImageItem[] = [
    { src: "https://cdn.builder.io/api/v1/image/assets/e7ac3d496ff943eda326dc20ff9397c0/c1ae213ca98aa4824ac75796b62a6d8adca3ce4c?placeholderIfAbsent=true", alt: "Boutique Event 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/e7ac3d496ff943eda326dc20ff9397c0/91486eed3e36742ee949a51b63a7879b74e4f82c?placeholderIfAbsent=true", alt: "Boutique Event 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/e7ac3d496ff943eda326dc20ff9397c0/2068cf7c61a84da6641ed4f94989e3b6315e1996?placeholderIfAbsent=true", alt: "Boutique Event 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/e7ac3d496ff943eda326dc20ff9397c0/0b0f0873011b87a1fe42f1fa60595d07cd36c859?placeholderIfAbsent=true", alt: "Boutique Event 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/e7ac3d496ff943eda326dc20ff9397c0/da6cec562cd86248e2723c6a69ca8b82eb934883?placeholderIfAbsent=true", alt: "Boutique Event 5" },
    { src: "https://cdn.builder.io/api/v1/image/assets/e7ac3d496ff943eda326dc20ff9397c0/4f7042233d014afdb3edeedca7140f9b6a117b2b?placeholderIfAbsent=true", alt: "Boutique Event 6" },
    { src: "https://cdn.builder.io/api/v1/image/assets/e7ac3d496ff943eda326dc20ff9397c0/fc44b2ad6b7288bc711531f93235da90bfb8eef1?placeholderIfAbsent=true", alt: "Boutique Event 7" },
    { src: "https://cdn.builder.io/api/v1/image/assets/e7ac3d496ff943eda326dc20ff9397c0/a659a8d0ce3d348355c22a85d38343b4b545e231?placeholderIfAbsent=true", alt: "Boutique Event 8" },
    { src: "https://cdn.builder.io/api/v1/image/assets/e7ac3d496ff943eda326dc20ff9397c0/25a98400cef32f2b8da6d9afd79c46924b06f9c4?placeholderIfAbsent=true", alt: "Boutique Event 9" },
  ];

  return (
    <>
      <RadialGradientBackground />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>WELCOME TO THE WORLD OF BOUTIQUE EVENTS. </Text>
          <TouchableOpacity onPress={() => { router.push('/login') }}>
            <FontAwesome6 name="arrow-right-long" size={50} color="#D1D1FF" />
          </TouchableOpacity>
        </View>

        {/* Main Gallery with Fading Overlays */}
        <View style={styles.galleryContainer}>
          {/* Top Fade */}
          <LinearGradient
            colors={['#000', 'transparent']}
            style={styles.topFade}
            pointerEvents="none"
          />
          {/* Bottom Fade */}
          <LinearGradient
            colors={['transparent', '#000']}
            style={styles.bottomFade}
            pointerEvents="none"
          />

          {/* Columns */}
          <AutoScrollColumn
            images={mainGalleryImages.slice(0, 3)}
            delay={0}
            direction="up"
          />
          <AutoScrollColumn
            images={mainGalleryImages.slice(3, 6)}
            delay={0}
            direction="down"
          />
          <AutoScrollColumn
            images={mainGalleryImages.slice(6, 9)}
            delay={0}
            direction="up"
          />
        </View>

        {/* Branding */}
        <Text style={styles.brand}>SMALLWORLD.CO</Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    margin: 10
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    flex: 1,
    fontWeight: '600',
  },
  galleryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: 15,
    height: moderateScale(500),
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 15,
  },
  topFade: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    zIndex: 10,
    opacity: 0.8,
  },
  bottomFade: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    zIndex: 10,
    opacity: 0.8,
  },
  brand: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default EventsLandingPage;
