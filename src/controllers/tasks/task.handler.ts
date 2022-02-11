import { FastifyRequest, FastifyReply } from 'fastify';
import { ITask } from '../../common/types';


type FastifyRequestTask = FastifyRequest<{
  Body: ITask;
  Params: {
    taskId: string;
    boardId: string;
  };
}>;

const getAllTasks = async (req:FastifyRequestTask, repl: FastifyReply) =>{
  const tasks = await 
}