import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type GroupsDocument = HydratedDocument<Groups>;

@Schema({ timestamps: true })
export class Groups {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref:'Directions'  }])
	direction_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	group_number:string;

	@Prop()
	teacher:string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref:'Assistants'  }])
	assistant_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	day:varchar;

	@Prop()
	time:string;

	@Prop()
	start_date:string;

	@Prop()
	photo:string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref:'Rooms'  }])
	room_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	is_active:boolean;

	;
}

export const GroupsSchema = SchemaFactory.createForClass(Groups);
