/*  */
const express = require('express');
const router = express.Router();

/*  Import Database Model   */
const ChatModel = require('../database/chat');

router.post('/add', (req, res) => {
    let chatDetail = new ChatModel({
        to: req.body.to,
        from: req.body.from,
        isActive: req.body.isActive
    });
    ChatModel.addChat(chatDetail, (err, data) => {
        if(err) res.send(err);
        else res.send(data);
    })
});

router.get('/', (req, res) => {
    ChatModel.getAllChats((err, data) => {
       if (err) res.send(err);
       else res.send(data);
    });
});

router.get('/:id', (req, res) => {
    const chatId = req.params.id;
    ChatModel.getInfo(chatId, (err, data) => {
        if(err) res.send(JSON.stringify(err));
        else res.send(JSON.stringify(data));
    });
});

router.get('/active/:id', (req, res) => {
    const id = req.params.id;
    ChatModel.getChatStatus(id, (err, data) => {
        if (err) res.send(err);
        else res.send(data.isActive);
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

/*
    PUT REQUESTS
 */

router.put('/', (req, res) => {
   ChatModel.updateAll((err, data) => {
      if (err) res.send(err);
      else res.send(data);
   });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;

    ChatModel.leaveChat(id, (err, data) => {
        if (err) res.send(err);
        else res.send(data.nModified.toString());
    })
});

/*  DELETE  */

router.use('*', (req, res) => {
    res.send("You're under chat");
});

/*  Export Controller*/
module.exports = router;