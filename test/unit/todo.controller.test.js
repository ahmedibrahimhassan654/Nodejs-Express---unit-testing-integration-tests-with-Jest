const TodoController=require('../../controllers/todocontroller')


describe('TodoController.createTodo',()=>{
    it('should have a createTodo function',()=>{
        expect(typeof TodoController.createTodo).toBe('function')

    })
})