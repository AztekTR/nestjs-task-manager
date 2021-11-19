import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    const targetIndex = this.tasks.findIndex((task) => task.id === id);
    this.tasks[targetIndex].status = status;
    return this.tasks[targetIndex];
  }

  deleteTask(id: string): Task {
    const targetIndex = this.tasks.findIndex((task) => task.id === id);
    return this.tasks.splice(targetIndex, 1)[0];
  }
}
