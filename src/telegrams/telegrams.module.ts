import { Module } from '@nestjs/common';
import { TelegramsService } from './telegrams.service';
import { TelegramsController } from './telegrams.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Telegrams, TelegramsSchema } from './schemas/telegrams.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Telegrams.name, schema: TelegramsSchema }]),
    JwtModule,
  ],
  controllers: [TelegramsController],
  providers: [TelegramsService],
})
export class TelegramsModule {}
