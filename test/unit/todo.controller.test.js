//import controller
const TodoController=require('../../controllers/todocontroller')
//import model
const TodoModel=require('../../model/todo.model')
//import http mocks
const httpMocks=require('node-mocks-http')


 TodoModel.create=jest.fn()
describe('TodoController.createTodo',()=>{
    it('should have a createTodo function',()=>{
        expect(typeof TodoController.createTodo).toBe('function')
    })
    it('should call create controller to do model ',()=>{
        let req,res,next
        req=httpMocks.createRequest()
        res=httpMocks.createResponse()
        next=null
        TodoController.createTodo(req,res,next)
        expect(TodoModel.create).toBeCalled()
    })

})