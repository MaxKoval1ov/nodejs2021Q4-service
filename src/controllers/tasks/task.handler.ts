import { FastifyRequest, FastifyReply } from 'fastify';
import { ITask } from '../../common/types';
import Task from './task.model';
import statusCode from '../../common/status.code';

import {
  getAllTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
  deleteBoardTaks,
  updateUserId,
} from './task.memory.repository';

type FastifyRequestTask = FastifyRequest<{
  Body: ITask;
  Params: {
    id: string;
    boardId: string;
  };
}>;

const getAllTasksRoute = async (
  req: FastifyRequest,
  repl: FastifyReply
) => {
  const tasks = await getAllTasks();
  repl.code(statusCode.OK).send(tasks);
};

const getTaskRouter = async (req: FastifyRequestTask, repl: FastifyReply) => {
  const { id } = req.params;
  try{
    const task = await getTask(id);
    repl.code(statusCode.OK).send(task);
  }
  catch{
    throw new Error("Smth went wrond.")
  }
};

const addTaskRouter = async (req: FastifyRequestTask, repl: FastifyReply) => {
  const task: ITask = new Task(req.body);
  await addTask(task);
  repl.code(statusCode.CREATED).send(task);
};


const updateTaskRouter = async (req: FastifyRequestTask, repl: FastifyReply) => {
  try{
  const { id } = req.params;

  const { title, order, description, userId, boardId, columnId } = req.body;

  const task = await getTask(id);

  if (!task) {
    return repl.status(statusCode.NO_CONTENT).send(new Error("Task doesn't exist"));
  }

  task.title ||= title;
  task.order ||= order;
  task.description ||= description;
  task.userId ||= userId;
  task.boardId ||= boardId;
  task.columnId ||= columnId;

  const updatedTask: ITask = new Task({ title, order, description, userId, boardId, columnId });

  await updateTask(id, updatedTask);
  }catch {
    throw new Error('Updating error.');
  }
}

const deleteTaskRouter = async (req: FastifyRequestTask, repl: FastifyReply) => {
  const { id } = req.params;

  if (await getTask(id)) {
    await deleteTask(id);
    repl.code(statusCode.NO_CONTENT);
  } else {
    throw new Error('Not found task');
  }
}

export {
  getAllTasksRoute,
  getTaskRouter,
  addTaskRouter,
  updateTaskRouter,
  deleteTaskRouter
}