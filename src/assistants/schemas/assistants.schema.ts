import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AssistantsDocument = HydratedDocument<Assistants>;

@Schema({ timestamps: true })
export class Assistants {
  @Prop()
	name:string;

	@Prop()
	surname:string;

	@Prop()
	password:string;

	@Prop()
	age:string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref:'Directions'  }])
	direction_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	phone:string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref:'Telegrams'  }])
	telegram_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	photo:string;

	@Prop()
	gender:boolean;

	@Prop()
	is_active:boolean;

	@Prop()
	token:string;

	;
}

export const AssistantsSchema = SchemaFactory.createForClass(Assistants);
