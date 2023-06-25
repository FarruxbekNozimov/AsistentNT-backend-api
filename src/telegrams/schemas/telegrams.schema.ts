import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TelegramsDocument = HydratedDocument<Telegrams>;

@Schema({ timestamps: true })
export class Telegrams {
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

export const TelegramsSchema = SchemaFactory.createForClass(Telegrams);
