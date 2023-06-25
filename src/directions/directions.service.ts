import { Injectable } from '@nestjs/common';
import { CreateDirectionsDto } from './dto/create-directions.dto';
import { UpdateDirectionsDto } from './dto/update-directions.dto';
import { Directions, DirectionsDocument } from './schemas/directions.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DirectionsService {
  constructor(
    @InjectModel(Directions.name)
    private directionsModel: Model<DirectionsDocument>,
  ) {}

  async create(createDirectionsDto: CreateDirectionsDto) {
    const res = await new this.directionsModel(createDirectionsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.directionsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.directionsModel.findById(id).exec();
  }

  async update(id: string, updateDirectionsDto: UpdateDirectionsDto) {
    return this.directionsModel
      .findByIdAndUpdate(id, updateDirectionsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.directionsModel.findByIdAndDelete(id).exec();
  }
}
