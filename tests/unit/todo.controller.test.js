const TodoController = require("../../controllers/todo.contrllers");
const TodoModel = require("../../model/Todo.model");

TodoModel.create = jest.fn();

describe("TodoControler.createTodo", () => {
  it("sholuld create todo api", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });
  it("should call todoModel.create", () => {
    TodoController.createTodo();
    expect(TodoModel.create).toBeCalled();
  });
});
