const TodoController = require("../../controllers/todo.contrllers");


describe('TodoControler.createTodo', () => {
    it('sholuld create todo api',()=>{
        expect(typeof TodoController.createTodo).toBe('function')
    })
})
