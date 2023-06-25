import { Injectable } from '@nestjs/common';
import { CreateRatingsDto } from './dto/create-ratings.dto';
import { UpdateRatingsDto } from './dto/update-ratings.dto';
import { Ratings, RatingsDocument } from './schemas/ratings.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RatingsService {
  constructor(
    @InjectModel(Ratings.name)
    private ratingsModel: Model<RatingsDocument>,
  ) {}

  async create(createRatingsDto: CreateRatingsDto) {
    const res = await new this.ratingsModel(createRatingsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.ratingsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.ratingsModel.findById(id).exec();
  }

  async update(id: string, updateRatingsDto: UpdateRatingsDto) {
    return this.ratingsModel
      .findByIdAndUpdate(id, updateRatingsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.ratingsModel.findByIdAndDelete(id).exec();
  }
}
