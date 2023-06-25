import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type RatingsDocument = HydratedDocument<Ratings>;

@Schema({ timestamps: true })
export class Ratings {
  @Prop()
  mark: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Assistants' })
  assistant_id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Students' })
  student_id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tasks' })
  task_id: mongoose.Schema.Types.ObjectId;

  @Prop()
  description: string;

  @Prop()
  date: string;
}

export const RatingsSchema = SchemaFactory.createForClass(Ratings);
