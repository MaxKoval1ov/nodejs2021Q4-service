import { FastifyRequest, FastifyReply } from 'fastify';
import { ITask } from '../../common/types';
import Task from "./task.model";

let dbTasks: ITask[] = [];


const getAllTasks = async (): Promise<ITask[]> => dbTasks;

const getTask = async (id: string): Promise<ITask | undefined> => dbTasks.find((task) => task.id === id);

const addTask = async (task: ITask): Promise<void> => {
    dbTasks.push(task);
}

const updateTask = async (id: string, newTask: ITask): Promise<void> => {
    dbTasks = dbTasks.map((task) => (task.id === id ? newTask : task));
}

const deleteTask = async(id: string): Promise<void> => {
    dbTasks.filter(task => task.id !== id);
}

const deleteBoardTaks = async (id: string):Promise<void> => {
    dbTasks = dbTasks.filter((task) => task.boardId !== id);
}

const updateUserId = async (userId: string): Promise<void> => {
    dbTasks.forEach((task) => {
        if (task.userId === userId) task.userId = null;
      });
}

export {
    getAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask,
    deleteBoardTaks, 
    updateUserId
}


