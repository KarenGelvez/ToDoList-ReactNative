import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ItemTodo = ({complete, todo, id}) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity>
        {complete ? (
          <Icon
            name="check-square-o"
            size={25}
            color="#737373"
            style={styles.icon}
          />
        ) : (
          <Icon name="square-o" size={25} color="#737373" style={styles.icon} />
        )}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>{todo}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    padding: 8,
    alignContent: 'center',
    borderRadius: 5,
    borderColor: '#d7d7d7',
    borderWidth: 1,
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 17,
    color: '#000',
  },
});
