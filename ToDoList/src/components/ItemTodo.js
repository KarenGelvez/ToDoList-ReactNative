import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {completedTodo, deleteTodo, updateTodo} from '../actions/todosAction';
import {ModalTodo} from './ModalTodo';

export const ItemTodo = ({completed, todo, id}) => {
  const dispatch = useDispatch();

  const handleCompleted = (id, completed) => {
    dispatch(completedTodo(id, completed));
  };

  const handleAlertModify = (id, todo) => {
    Alert.alert(
      '',
      '¿Deseas Modificar o Eliminar?',
      [
        {
          text: 'ELIMINAR',
          onPress: () => dispatch(deleteTodo(id)),
          style: 'cancel',
        },
        {text: 'MODIFICAR', onPress: () => <ModalTodo id={id} todo={todo} />},
      ],
      {cancelable: true},
    );
  };

  return (
    //1 true - 0 false
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => handleCompleted(id, completed)}
        style={{width: 33}}>
        {completed ? (
          <Icon
            name="check-square-o"
            size={25}
            color="#737373"
            style={styles.icon}
          />
        ) : (
          <Icon name="square-o" size={25} color="#737373" />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexShrink: 1, width: '100%'}}
        onPress={() => handleAlertModify(id, todo)}
        onLongPress={() => handleAlertDelete(id)}>
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
  text: {
    fontSize: 17,
    color: '#000',
  },
});
