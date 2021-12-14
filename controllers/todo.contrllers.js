const TodoModel = require("../model/Todo.model");

exports.createTodo = () => {
  TodoModel.create();
};
