import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type RoomsDocument = HydratedDocument<Rooms>;

@Schema({ timestamps: true })
export class Rooms {
  @Prop()
	name:string;

	@Prop()
	route:string;

	;
}

export const RoomsSchema = SchemaFactory.createForClass(Rooms);
