import { Module } from '@nestjs/common';
import { AssistantsService } from './assistants.service';
import { AssistantsController } from './assistants.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Assistants, AssistantsSchema } from './schemas/assistants.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Assistants.name, schema: AssistantsSchema },
    ]),
    JwtModule,
  ],
  controllers: [AssistantsController],
  providers: [AssistantsService],
})
export class AssistantsModule {}
