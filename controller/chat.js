/*  */
const express = require('express');
const router = express.Router();

/*  Import Database Model   */
const ChatModel = require('database/chat');

router.get('/:id/message/all', (req, res) => {

});

router.get('/:id/message/unread', (req, res) => {

});

router.post('/message', (req, res) =>{

});

router.post('/add', (req, res) => {

});



/*  Export Controller*/
module.exports = router;