import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTodos} from '../actions/todosAction';
import {ItemTodo} from '../components/ItemTodo';
import Firebase from '../firebase/Firebase';

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  console.log(todos);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={<ItemTodo />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
export default Todos;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 10,
  },
});
