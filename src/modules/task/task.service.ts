import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entity/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entity/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepo: Repository<Task>,

    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async create(taskData: CreateTaskDto) {
    const user = await this.usersRepo.findOne({
      where: { id: taskData.userId },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${taskData.userId} not found`);
    }

    const task = this.tasksRepo.create({
      name: taskData.name,
      description: taskData.description,
      user: user,
    });

    return this.tasksRepo.save(task);
  }

  findAll() {
    return this.tasksRepo.find({
      select: ['id', 'name', 'description', 'completedAt'],
      relations: ['user'],
    });
  }

  async findOne(id: number) {
    const task = await this.tasksRepo.findOne({
      where: { id },
      select: ['id', 'name', 'description', 'completedAt'],
      relations: ['user'],
    });

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }

  async update(id: number, updateData: UpdateTaskDto) {
    const task = await this.tasksRepo.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    await this.tasksRepo.update(id, updateData);

    return this.findOne(id);
  }

  remove(id: number) {
    return this.tasksRepo.delete(id);
  }

  async clearAll() {
    await this.tasksRepo.clear();
  }
}
