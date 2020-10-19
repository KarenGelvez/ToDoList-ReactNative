import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>No hay tareas por el momento</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignContent: 'center',
    flexShrink: 1,
    height: '100%',
  },
  text: {
    fontSize: 20,
    color: '#737373',
    alignSelf: 'center',
  },
});
