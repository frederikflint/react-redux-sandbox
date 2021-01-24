import { VISIBILITY_FILTERS } from "../constants";

export const getTodosState = (store) => store.todos;

export const getTodoList = (store) =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getDistinctAuthors = (store) => {
  const todos = getTodos(store);

  return (
    todos
      .map((todo) => todo.content.inputAuthor)
      // Easy way of getting unique elements of array
      .filter((value, index, self) => self.indexOf(value) === index)
  );
};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = (store) =>
  getTodoList(store).map((id) => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
