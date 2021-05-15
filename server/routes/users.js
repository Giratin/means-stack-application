var express = require('express');
var router = express.Router();

const User = require('../models/user.model');

/* GET users listing. */


router.get('/reset-all', async function (req, res, next) {
  const user1 = User({
    name: "yassine sta",
    age: 21,
    email: "yassine.sta@esprit.tn"
  });
  const user2 = User({
    name: "foulen ben foulen",
    age: 24,
    email: "foulen.benfoulen@esprit.tn"
  });
  const user3 = User({
    name: "adel aleimi",
    age: 32,
    email: "adel.aleimi@esprit.tn"
  });


  await User.remove({});
  await user1.save();
  await user2.save();
  await user3.save();


  res.json([
    user1,
    user2,
    user3
  ])
});


router.get('/', async (req,res)=>{
  const users = await User.find();
  res.json(users);
});
router.post('/', async (req,res)=>{
  const { name, age, email } = req.body;

  const user = new User({ name, age, email });
  await user.save();
  res.json(user);
});

router.get('/:_id', async function (req, res, next) {
  const { _id } = req.params;


  const user = await User.findOne({ _id });

  if (!user) {
    return res.status(404).json({
      error: true,
      message: "User not found"
    });
  }

  res.json(user)
});

module.exports = router;
