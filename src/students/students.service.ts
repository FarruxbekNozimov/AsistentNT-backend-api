import { Injectable } from '@nestjs/common';
import { CreateStudentsDto } from './dto/create-students.dto';
import { UpdateStudentsDto } from './dto/update-students.dto';
import { Students, StudentsDocument } from './schemas/students.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Students.name)
    private studentsModel: Model<StudentsDocument>,
  ) {}

  async create(createStudentsDto: CreateStudentsDto) {
    const res = await new this.studentsModel(createStudentsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.studentsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.studentsModel.findById(id).exec();
  }

  async update(id: string, updateStudentsDto: UpdateStudentsDto) {
    return this.studentsModel
      .findByIdAndUpdate(id, updateStudentsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.studentsModel.findByIdAndDelete(id).exec();
  }
}
