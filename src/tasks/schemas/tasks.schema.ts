import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TasksDocument = HydratedDocument<Tasks>;

@Schema({ timestamps: true })
export class Tasks {
  @Prop()
	title:string;

	@Prop()
	description:string;

	@Prop()
	start_time:string;

	@Prop()
	deadline:string;

	;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);
