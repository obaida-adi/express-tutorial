const express = require('express');
const router = express.Router();

let users = [
  { id: 0, name: 'John' },
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Janet' },
  { id: 3, name: 'George' },
  { id: 4, name: 'Jeff' },
  { id: 5, name: 'Kyle' }
];

router.get('/', (req, res, next) => {
  res.status(200).send(users);
});

router.get('/:userId', (req, res, next) => {
  const id = req.params.userId;
  let userExists = false;

  for (user in users) {
    if (users[user].id == id) {
      userExists = true;
    }
  }

  if (userExists) {
    res.status(200).send(users[id]);
  } else {
    res.status(404).send({ message: `User with id ${id} not found.` });
  }
});

router.delete('/:userId', (req, res, next) => {
  const id = req.params.userId;
  let userExists = false;
  let userDeleted = false;

  for (user in users) {
    if (users[user].id == id) {
      userExists = true;
    }
  }

  if (userExists) {
    users[id] == null;
    userDeleted = true;
  } else {
    res.status(404).send({ message: `User with id ${id} not found.` });
  }

  if (userDeleted) {
    res.status(200).send({
      message: `Deleted user with id ${id}`
    });
  } else {
    res.status(500).send({ message: `Could not delete user with id ${id}` });
  }
});

module.exports = router;
