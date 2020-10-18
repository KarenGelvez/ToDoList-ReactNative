export const convertTodo = (obj) => {
  if (obj === null) {
    return {};
  } else {
    return Object.keys(obj).map((ob) => {
      return {id: ob, todo: obj[ob]['todo'], completed: obj[ob]['completed']};
    });
  }
};
