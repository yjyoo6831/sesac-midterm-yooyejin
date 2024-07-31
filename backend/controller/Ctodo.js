const { now } = require('sequelize/lib/utils');
const todoModel = require('../models/Todo');
const {Todo} = require('../models/index');

//todo 추가
exports.postTodos = async(req,res) => {
    try{
        console.log("postTodos >> ", req.body);
        const {id,title,done} = req.body;
        // console.log("postTodos >> ", id,title,done);
        const newTodo = await Todo.create({
            id, title, done
        });
        res.json(newTodo);

    } catch(err){
        console.error('insert error > ',err);
        res.status(500).send('Internal Server Error');
    }


}

// todo 전체 조회
exports.getTodos = async(req,res) => {
    try {
        const todos=await Todo.findAll();
        res.json(todos);
        console.log("todo 전체 조회",req.params);
    } catch (error) {
        console.error("todo 전체 조회 error",error);
    }
};

// todo 단일 조회 - 진행하기
exports.getTodo = async(req,res) => {
    try {
        
        console.log("todo 단일 조회 > ",req.params.id);

        const {id} = req.params;
        const todo = await Todo.findOne({
            where : {id}
        });
        console.log(todo); 
        const obj={
            "message": "Todo not found"
          }
        if(todo){
            return res.json(todo);
            // return res.send(true);
        }else{
            return res.send(obj);
        }
        
    } catch (error) {
        console.error("todo 단일 조회 error",error);
        // res.status(500).send('Todo not found2');
    }
};

exports.patchTodo = async(req,res) => {
    try{

    console.log("patch >> ",req.body);
    const {id} = req.params;
    const {title,done} = req.body;
    
    console.log("patch2 >> ",id,title,done);
    const todoUp = await Todo.update({
        title,done
    },
    {
        where : {id}
    });
    console.log("up? " ,todoUp)
    const obj={
        "message": "Todo not found"
    }
    const todofinal = await Todo.findOne({
        where : {id}
    });
    console.log(todofinal); // 삭제되면 1 , 삭제실패시 0 
    if(todoUp == '1'){
        return res.json(todofinal);
    }else{
        return res.send(obj);
    }
    console.log(" up >> ", todo);
}
catch{
    res.status(500).send('Todo not found');
}
};

exports.deleteTodo = async(req,res) => {
    try {
        const {id} = req.params;
        const isDeleted = await Todo.destroy({
            where : {id}
        });
        console.log(isDeleted); // 삭제되면 1 , 삭제실패시 0 

        const obj={
            "message": "Todo not found"
          }
        const obj1={
             "message": "Todo deleted successfully",
                "deletedId": id
          }

        if(isDeleted){
            return res.json(obj1);
            // return res.send(true);
        }else{
            return res.send(obj);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}