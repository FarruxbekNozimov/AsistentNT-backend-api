import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { StudentsModule } from '../students/students.module';
import { StaffsModule } from '../staffs/staffs.module';

@Module({
  imports: [JwtModule.register({}), StudentsModule, StaffsModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
