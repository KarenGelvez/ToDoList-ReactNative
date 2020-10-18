import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {addTodo, getTodos} from '../actions/todosAction';
import {ItemTodo} from '../components/ItemTodo';

const Todos = () => {
  const {todos} = useSelector((state) => state.todos);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const handleChange = (val) => {
    setValue(val);
  };
  const handleAddTodo = () => {
    if (value) {
      dispatch(addTodo(value));
      setValue('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <ItemTodo completed={item.completed} todo={item.todo} id={item.id} />
        )}
        keyExtractor={(item) => String(item.id)}
      />
      <View style={styles.view}>
        <TextInput
          multiline={true}
          style={styles.text}
          value={value}
          onChangeText={handleChange}
          placeholder={'Escribe una tarea'}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <Icon name="check-circle" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Todos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 10,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderColor: '#737373',
    borderWidth: 1,
    borderRadius: 40,
  },
  text: {
    flexShrink: 1,
    width: '100%',
  },
});
