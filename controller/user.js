/*  */
const express = require('express');
const router = express.Router();

/*  Import Database Model   */
const UserModel = require('../database/user');

router.get('/', (req, res) => {
   UserModel.getAllUsers((err, data) => {
       if (err) res.send(err);
       else res.send(data);
   })
});

router.get('/free', (req, res) => {
    UserModel.getFreeUser((err, user)=>{
        if(err) res.send(err);
        else {
            if(user) res.send(user._id);
            else res.send(null);
        }
    })
});

router.get('/:id', (req, res) => {
    let u_id = req.params.id;
    UserModel.getUser(u_id, (err, user) => {
       if(err) res.send(JSON.stringify(err));
       else res.send(JSON.stringify(user));
    });
});

router.post('/add', (req, res) =>{
    let user = {
        username: req.body.username,
        wantsToChat: false,
        isEngaged: false,
        isTyping: false
    };
    UserModel.addUser(user, (err, data) =>
    {
        if(err) res.send(JSON.stringify(err));
        else res.send(JSON.stringify(data));
    })
});

router.get('/engaged/:id', (req, res) => {
   let u_id = req.params.id;
   UserModel.getEngagementValue(u_id, (err, data) => {
        if(err) res.send(err);
        else res.send(data.isEngaged);
   });
});

router.put('/', (req, res) => {
   UserModel.freeAll((err, data) => {
      if(err) res.send(err);
      else res.send(data);
   });
});

router.put('/free', (req, res) => {
    let user = new UserModel({
       _id: req.body.id,
       wantsToChat: req.body.value
    });

    UserModel.updateFreedom(user, (err, data) => {
        if(err) res.send(err);
        else res.send(data.nModified.toString());
    });
});


router.put('/free/:id', (req, res) => {
    let id = req.params.id;

    UserModel.freeUser(id, (err, data) => {
        if(err) res.send(err);
        else res.send(data.nModified.toString());
    });
});

router.put('/engaged', (req, res) => {
    let user = new UserModel({
        _id: req.body.id,
        isEngaged: req.body.value
    });
    UserModel.updateEngagement(user, (err, data) => {
        if (err) res.send(err);
        else res.send(data.nModified.toString());
    });
});

router.delete('/', (req, res) => {
    UserModel.removeAll ((err, data) => {
        if (err) res.send(err);
        else res.send(data);
    })
});

router.delete('/remove', (req, res) => {
    let user = new UserModel({
        _id: req.body.id,
    });
    UserModel.removeUser(user._id, (err, data) => {
        if(err) res.send('Error: ' + JSON.stringify(err));
        else res.send('Deleted: ' + JSON.stringify(data));
    })
});

router.use('*', (req, res) => {
    res.send("You're under user");
});


/*  Export Controller*/
module.exports = router;