const controller = require('../controller/Ctodo.js')
const express = require('express');
const router=express.Router();

// todo 추가
// router.post('/todos',postTodos);
router.post('/',controller.postTodos);

// todo 전체 조회
router.get('/',controller.getTodos);
router.get('/:id',controller.getTodo);

// 수정
router.patch('/:id',controller.patchTodo);

//삭제
router.delete('/:id',controller.deleteTodo);

module.exports = router;


