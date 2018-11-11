/*  */
const express = require('express');
const router = express.Router();

/*  Import Database Model   */
const ChatModel = require('../database/chat');

router.post('/add', (req, res) => {
    let chatDetail = new ChatModel({
        to: req.body.to,
        from: req.body.from
    });
    ChatModel.addChat(chatDetail, (err, data) => {
        if(err) res.send(err);
        else res.send(data);
    })
});

router.get('/:id', (req, res) => {
    const chatId = req.params.id;
    ChatModel.getInfo(chatId, (err, data) => {
        if(err) res.send(JSON.stringify(err));
        else res.send(JSON.stringify(data));
    });
});

router.get('/user/:id', (req, res) => {
    /*  Gets chat for a specified user  */
    const userId = req.params.id;
    ChatModel.getUserChat(userId, (err, data) => {
       if (err) res.send(err);
       else res.send(data);
    });
});

router.use('*', (req, res) => {
    res.send("You're under chat");
});

/*  Export Controller*/
module.exports = router;