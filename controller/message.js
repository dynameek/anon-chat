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

router.get('/:id/unread', (req, res) => {
    MessageModel.getUnreadMessages(req.params.id, (err, data) => {
        let messages = {};
        if(err) res.send('Error: '+JSON.stringify(err));
        else {
            data.forEach(x => {
               messages[x._id] = {by: x.by, body: x.body};
            });

            MessageModel.updateFetchStatus(req.params.id, (err, data)=>{
                if(data.n > 0) messages.updateSuccess = 1;
                else messages.updateSuccess = 0;

                res.send(messages);
            });
        }
    })
});
router.delete('', (req, res) => {
    MessageModel.deleteAll((err, data) => {
        if (err) res.send(err);
        else res.send(data);
    })
})

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

router.use('*', (req, res) => {
    res.send("You're under message");
});


/*  Export Controller*/
module.exports = router;