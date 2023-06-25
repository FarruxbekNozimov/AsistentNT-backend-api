import { Module } from '@nestjs/common';
import { DirectionsService } from './directions.service';
import { DirectionsController } from './directions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Directions, DirectionsSchema } from './schemas/directions.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Directions.name, schema: DirectionsSchema }]),
    JwtModule,
  ],
  controllers: [DirectionsController],
  providers: [DirectionsService],
})
export class DirectionsModule {}
