const express = require('express');
const zod = require('zod');
const { User, Account } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const { authMiddleware } = require('../middleware');

const router = express.Router();

router.get('/bulk', async (req, res) => {
  const filter = req.query.filter || '';

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter
        }
      },
      {
        lastName: {
          $regex: filter
        }
      }
    ]
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id
    }))
  });
});

const updateSchema = zod.object({
  password: zod.string().optional(),
  firstname: zod.string().optional(),
  lastname: zod.string().optional()
});
router.put('/', authMiddleware, async (req, res) => {
  const body = req.body;
  const { success } = updateSchema.safeParse(body);
  if (!success) {
    return res.json({
      message: 'some mesage'
    });
  }

  await User.updateOne(req.body, {
    id: req.userId,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  });
  res.json({
    message: 'Updated successfully'
  });
});

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string()
});
router.post('/signup', async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(body);

  if (!success) {
    return res.json({
      message: 'some mesage'
    });
  }
  const existingUser = await User.findOne({
    username: req.body.username
  });
  if (existingUser) {
    return res.status(411).json({
      message: 'Email already taken/Incorrect inputs'
    });
  }
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000
  });

  const token = jwt.sign(
    {
      userId
    },
    JWT_SECRET
  );

  res.json({
    message: 'User created successfully',
    token: token
  });
});

router.post('/login');

module.exports = router;
