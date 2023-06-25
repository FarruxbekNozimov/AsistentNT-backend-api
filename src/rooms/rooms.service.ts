import { Injectable } from '@nestjs/common';
import { CreateRoomsDto } from './dto/create-rooms.dto';
import { UpdateRoomsDto } from './dto/update-rooms.dto';
import { Rooms, RoomsDocument } from './schemas/rooms.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Rooms.name)
    private roomsModel: Model<RoomsDocument>,
  ) {}

  async create(createRoomsDto: CreateRoomsDto) {
    const res = await new this.roomsModel(createRoomsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.roomsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.roomsModel.findById(id).exec();
  }

  async update(id: string, updateRoomsDto: UpdateRoomsDto) {
    return this.roomsModel
      .findByIdAndUpdate(id, updateRoomsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.roomsModel.findByIdAndDelete(id).exec();
  }
}
