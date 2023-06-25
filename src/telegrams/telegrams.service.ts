import { Injectable } from '@nestjs/common';
import { CreateTelegramsDto } from './dto/create-telegrams.dto';
import { UpdateTelegramsDto } from './dto/update-telegrams.dto';
import { Telegrams, TelegramsDocument } from './schemas/telegrams.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TelegramsService {
  constructor(
    @InjectModel(Telegrams.name)
    private telegramsModel: Model<TelegramsDocument>,
  ) {}

  async create(createTelegramsDto: CreateTelegramsDto) {
    const res = await new this.telegramsModel(createTelegramsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.telegramsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.telegramsModel.findById(id).exec();
  }

  async update(id: string, updateTelegramsDto: UpdateTelegramsDto) {
    return this.telegramsModel
      .findByIdAndUpdate(id, updateTelegramsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.telegramsModel.findByIdAndDelete(id).exec();
  }
}
