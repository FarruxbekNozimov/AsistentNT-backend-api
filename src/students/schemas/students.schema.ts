import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type StudentsDocument = HydratedDocument<Students>;

@Schema({ timestamps: true })
export class Students {
  @Prop()
	name:string;

	@Prop()
	surname:string;

	@Prop()
	age:string;

	@Prop()
	phone:string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref:'Telegrams'  }])
	telegram_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	photo:string;

	@Prop()
	gender:boolean;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref:'Groups'  }])
	group_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	is_active:boolean;

	@Prop()
	token:string;

	;
}

export const StudentsSchema = SchemaFactory.createForClass(Students);
