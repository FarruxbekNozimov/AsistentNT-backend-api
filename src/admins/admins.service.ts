import { Injectable } from '@nestjs/common';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { UpdateAdminsDto } from './dto/update-admins.dto';
import { Admins, AdminsDocument } from './schemas/admins.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admins.name)
    private adminsModel: Model<AdminsDocument>,
  ) {}

  async create(createAdminsDto: CreateAdminsDto) {
    const res = await new this.adminsModel(createAdminsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.adminsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.adminsModel.findById(id).exec();
  }

  async findByLogin(login: string) {
    return this.adminsModel.findOne({ login }).exec();
  }

  async update(id: string, updateAdminsDto: UpdateAdminsDto) {
    return this.adminsModel
      .findByIdAndUpdate(id, updateAdminsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.adminsModel.findByIdAndDelete(id).exec();
  }
}
