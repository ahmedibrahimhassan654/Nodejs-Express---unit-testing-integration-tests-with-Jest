const TodoController = require("../../controllers/todo.contrllers");
const TodoModel = require("../../model/Todo.model");
const httpMocks = require("node-mocks-http");
TodoModel.create = jest.fn();

describe("TodoControler.createTodo", () => {
  it("sholuld create todo api", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });
  it("should call todoModel.create", () => {
    let req, res, next;

    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;

    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalled();
  });
});
