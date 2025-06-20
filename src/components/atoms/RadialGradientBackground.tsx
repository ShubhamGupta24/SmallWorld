import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

const RadialGradientBackground = () => (
  <Svg style={StyleSheet.absoluteFill} preserveAspectRatio="none">
    <Defs>
      <RadialGradient id="grad" cx="50%" cy="50%" rx="50%" ry="50%">
        <Stop offset="0%" stopColor="#30307C" stopOpacity="1" />
        <Stop offset="35%" stopColor="#1E1E4E" stopOpacity="1" />
        <Stop offset="100%" stopColor="#0C0C1F" stopOpacity="1" />
      </RadialGradient>
    </Defs>
    <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
  </Svg>
);

export default RadialGradientBackground;
