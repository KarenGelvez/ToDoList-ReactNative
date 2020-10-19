import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Lista de tareas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#737373',
    elevation: 5,
    width: '100%',
    height: 45,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
  },
});
