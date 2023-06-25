import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { AdminsService } from '../admins/admins.service';
import { AssistantsService } from '../assistants/assistants.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminsService: AdminsService,
    private readonly assistantsService: AssistantsService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto, res: Response) {
    const { username, password } = loginDto;
    const admin = await this.adminsService.findByLogin(username);
    if (!admin) {
      throw new HttpException(
        { msg: `User not found` },
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatchPass = await bcrypt.compare(password, admin.password);
    if (!isMatchPass) {
      throw new UnauthorizedException({
        msg: `Parol yoki Login xato kiritilgan !!!`,
      });
    }
    const tokens = await this.getToken(admin.id, 'ADMIN');

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.adminsService.update(admin.id, {
      token: hashed_refresh_token,
    });

    res.cookie('token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      status: 200,
      msg: 'Muvaffaqiyatli kirdingiz',
      admin: updatedUser,
      tokens,
    };
    return response;
  }

  async loginAssistant(loginDto: LoginDto, res: Response) {
    const { username, password } = loginDto;
    const admin = await this.assistantsService.findByLogin(username);
    if (!admin) {
      throw new HttpException(
        { msg: `User not found` },
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatchPass = await bcrypt.compare(password, admin.password);
    if (!isMatchPass) {
      throw new UnauthorizedException({
        msg: `Parol yoki Login xato kiritilgan !!!`,
      });
    }
    const tokens = await this.getToken(admin.id, 'ASSISTANT');

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.assistantsService.update(admin.id, {
      token: hashed_refresh_token,
    });

    res.cookie('token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      status: 200,
      msg: 'Muvaffaqiyatli kirdingiz',
      admin: updatedUser,
      tokens,
    };
    return response;
  }

  private async getToken(id: string, role: string) {
    const payload = { id, role };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return { access_token: accessToken, refresh_token: refreshToken };
  }
}
