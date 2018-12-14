/*  */
const express = require('express');
const router = express.Router();

/*  Import Database Model   */
const MessageModel = require('../database/message');

router.get('/:id/all', (req, res) => {
    let message = new MessageModel({
       for: req.params.id
    });
    MessageModel.getAllMessages(message.for, (err, data) => {
       if(err) res.send('Error: ' + JSON.stringify(err));
       else res.send(JSON.stringify((data)));
    });
});

router.get('/unread/:chatId/:userId', (req, res) => {
    const values = {
        chat: req.params.chatId,
        user: req.params.userId
    };

    MessageModel.getUnreadMessages(values, (err, data) => {
        let messages = {};
        if(err) res.send('Error: '+JSON.stringify(err));
        else {
            data.forEach(x => {
               messages[x._id] = {by: x.by, body: x.body};
            });
            res.send(messages);
        }
    })
});

router.put('/unread/:id', (req, res) => {
    const msgId = req.params.id;
    MessageModel.updateFetchStatus(msgId, (err, data) => {
        if(err) res.send(err);
        else res.send(data);
    });
});

router.post('/add', (req, res) =>{
    let message = new MessageModel({
        body: req.body.msgBody,
        by: req.body.msgBy,
        for: req.body.msgFor,
        isFetched: false
    });
    MessageModel.addMessage(message, (err, data) => {
       if(err) res.send("Error: "+ JSON.stringify(err));
       else res.send((data));
    });
});

router.put('/:id', (req, res) => {

});

router.delete('', (req, res) => {
    MessageModel.deleteAll((err, data) => {
        if (err) res.send(err);
        else res.send(data.nModified);
    })
});

router.use('*', (req, res) => {
    res.send("You're under message");
});


/*  Export Controller*/
module.exports = router;