import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AdminsModule } from '../admins/admins.module';
import { AssistantsModule } from '../assistants/assistants.module';

@Module({
  imports: [JwtModule.register({}), AdminsModule, AssistantsModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
