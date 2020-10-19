import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {completedTodo, deleteTodo, updateTodo} from '../actions/todosAction';

export const ItemTodo = ({completed, todo, id}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [newTodo, setnewTodo] = useState(todo);
  const handleCompleted = (id, completed) => {
    dispatch(completedTodo(id, completed));
  };
  const handleChange = (val) => {
    setnewTodo(val);
  };

  const handleAlertModify = (id, todo) => {
    Alert.alert(
      'Tarea',
      todo,
      [
        {
          text: 'ELIMINAR',
          onPress: () => dispatch(deleteTodo(id)),
          style: 'cancel',
        },
        {text: 'MODIFICAR', onPress: () => setModalVisible(true)},
      ],
      {cancelable: true},
    );
  };

  return (
    //1 true - 0 false{}
    <View style={styles.view}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontWeight: 'bold', fontSize: 17}}>
              MODIFICAR TAREA
            </Text>
            <TextInput
              multiline={true}
              value={newTodo}
              onChangeText={handleChange}
              style={styles.modalText}
            />
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#838383'}}
              onPress={() => {
                setModalVisible(!modalVisible);
                dispatch(updateTodo(id, newTodo));
              }}>
              <Text style={styles.textStyle}>Modificar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '80%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: '#737373',
    width: '100%',
  },
});
