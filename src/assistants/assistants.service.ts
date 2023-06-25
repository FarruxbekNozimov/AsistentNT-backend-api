import { Injectable } from '@nestjs/common';
import { CreateAssistantsDto } from './dto/create-assistants.dto';
import { UpdateAssistantsDto } from './dto/update-assistants.dto';
import { Assistants, AssistantsDocument } from './schemas/assistants.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AssistantsService {
  constructor(
    @InjectModel(Assistants.name)
    private assistantsModel: Model<AssistantsDocument>,
  ) {}

  async create(createAssistantsDto: CreateAssistantsDto) {
    const res = await new this.assistantsModel(createAssistantsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.assistantsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.assistantsModel.findById(id).exec();
  }

  async update(id: string, updateAssistantsDto: UpdateAssistantsDto) {
    return this.assistantsModel
      .findByIdAndUpdate(id, updateAssistantsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.assistantsModel.findByIdAndDelete(id).exec();
  }
}
