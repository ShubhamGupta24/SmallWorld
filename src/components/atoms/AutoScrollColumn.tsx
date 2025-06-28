import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface ImageItem {
  src: string;
  alt: string;
}

interface AutoScrollColumnProps {
  images: ImageItem[];
  duration?: number;
  imageHeight?: number;
  delay?: number;
  direction?: 'up' | 'down';
}

const AutoScrollColumn: React.FC<AutoScrollColumnProps> = ({
  images,
  duration = 10000,
  imageHeight = moderateScale(150),
  delay = 0,
  direction = 'up',
}) => {
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const totalScrollHeight = imageHeight + 20;

  useEffect(() => {
    const startScroll = () => {
      Animated.loop(
        Animated.timing(scrollAnim, {
          toValue: 1,
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    };

    const timer = setTimeout(startScroll, delay);
    return () => clearTimeout(timer);
  }, [scrollAnim, duration, delay]);

  const duplicated = [...images, ...images];

  const translateY = scrollAnim.interpolate({
    inputRange: [0, 1],
    outputRange:
      direction === 'down'
        ? [-duplicated.length * totalScrollHeight / 2, 0]
        : [0, -duplicated.length * totalScrollHeight / 2],
  });

  return (
    <Animated.View style={[styles.column, { transform: [{ translateY }] }]}>
      {duplicated.map((img, index) => (
        <Image
          key={index}
          source={{ uri: img.src }}
          accessibilityLabel={img.alt}
          style={[styles.image, index > 0 && { marginTop: 20 }]}
          resizeMode="cover"
        />
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: moderateScale(100),
    height: moderateScale(150),
    borderRadius: 10,
  },
});

export default AutoScrollColumn;
