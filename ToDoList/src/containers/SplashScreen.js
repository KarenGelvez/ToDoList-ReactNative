import React from 'react';
import {StyleSheet, ImageBackground, Image} from 'react-native';

export const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/BackgroundImage.png')}
      style={styles.fondo}>
      <Image
        source={require('../../assets/images/Logo.png')}
        style={styles.image}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  fondo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
