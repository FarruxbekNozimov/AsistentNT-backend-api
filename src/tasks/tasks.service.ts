import { Injectable } from '@nestjs/common';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';
import { Tasks, TasksDocument } from './schemas/tasks.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Tasks.name)
    private tasksModel: Model<TasksDocument>,
  ) {}

  async create(createTasksDto: CreateTasksDto) {
    const res = await new this.tasksModel(createTasksDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.tasksModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.tasksModel.findById(id).exec();
  }

  async update(id: string, updateTasksDto: UpdateTasksDto) {
    return this.tasksModel
      .findByIdAndUpdate(id, updateTasksDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.tasksModel.findByIdAndDelete(id).exec();
  }
}
