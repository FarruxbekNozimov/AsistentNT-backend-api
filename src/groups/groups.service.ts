import { Injectable } from '@nestjs/common';
import { CreateGroupsDto } from './dto/create-groups.dto';
import { UpdateGroupsDto } from './dto/update-groups.dto';
import { Groups, GroupsDocument } from './schemas/groups.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Groups.name)
    private groupsModel: Model<GroupsDocument>,
  ) {}

  async create(createGroupsDto: CreateGroupsDto) {
    const res = await new this.groupsModel(createGroupsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.groupsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.groupsModel.findById(id).exec();
  }

  async update(id: string, updateGroupsDto: UpdateGroupsDto) {
    return this.groupsModel
      .findByIdAndUpdate(id, updateGroupsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.groupsModel.findByIdAndDelete(id).exec();
  }
}
