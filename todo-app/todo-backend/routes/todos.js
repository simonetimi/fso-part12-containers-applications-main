const express = require('express');
const { Todo } = require('../mongo');
const router = express.Router();
const redis = require('../redis');
const { getAsync, setAsync } = require('../redis');

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  const todosCount = await getAsync('todosCount');
  await setAsync('todosCount', Number(todosCount) + 1);

  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  const foundTodo = req.todo;
  res.send(foundTodo).status(200);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: req.todo._id },
    req.body,
    { new: true },
  );
  res.send(updatedTodo).status(200);
});

router.use('/:id', findByIdMiddleware, singleRouter);

module.exports = router;
