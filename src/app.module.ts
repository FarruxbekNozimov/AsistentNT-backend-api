import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdminsModule } from './admins/admins.module';
import { AssistantsModule } from './assistants/assistants.module';
import { DirectionsModule } from './directions/directions.module';
import { GroupsModule } from './groups/groups.module';
import { RatingsModule } from './ratings/ratings.module';
import { RoomsModule } from './rooms/rooms.module';
import { StudentsModule } from './students/students.module';
import { TasksModule } from './tasks/tasks.module';
import { TelegramsModule } from './telegrams/telegrams.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    AdminsModule,
    AssistantsModule,
    DirectionsModule,
    GroupsModule,
    RatingsModule,
    RoomsModule,
    StudentsModule,
    TasksModule,
    TelegramsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
