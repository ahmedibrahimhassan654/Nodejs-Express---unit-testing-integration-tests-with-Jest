//import controller
const TodoController=require('../../controllers/todocontroller')
//import model
const TodoModel=require('../../model/todo.model')

 TodoModel.create=jest.fn()
describe('TodoController.createTodo',()=>{
    it('should have a createTodo function',()=>{
        expect(typeof TodoController.createTodo).toBe('function')
    })
    it('should call create controller to do model ',()=>{

        TodoController.createTodo()
        expect(TodoModel.create).toBeCalled()
    })

})