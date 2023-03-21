// TODO: make path relative
const config = require('/home/jesse-justin/workspace/interview-prep/todos-app/knexfile')['development'];
const connection = require('knex')(config);

export const dbAddTodo = (data) => {
  return connection('todos').insert(data);
};

export const dbGetTodos = () => {
  return connection('todos');
};

export const dbGetTodoById = (id) => {
  return connection('todos').where('id', id).first();
};

export const dbUpdateTodo = (id, data) => {
  return connection('todos').where('id', id).update(data);
};

export const dbDeleteTodo = (id) => {
  return connection('todos').where('id', id).delete();
};
