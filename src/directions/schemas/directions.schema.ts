import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type DirectionsDocument = HydratedDocument<Directions>;

@Schema({ timestamps: true })
export class Directions {
  @Prop()
	name:string;

	@Prop()
	is_active:boolean;

	;
}

export const DirectionsSchema = SchemaFactory.createForClass(Directions);
