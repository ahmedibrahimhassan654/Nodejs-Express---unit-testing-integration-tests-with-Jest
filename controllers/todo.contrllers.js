const TodoModel = require("../model/Todo.model");

exports.createTodo = (req, res, next) => {
  TodoModel.create(req.body);
};
