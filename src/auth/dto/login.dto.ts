import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'toshmatdev01' })
  username: string;

  @ApiProperty({ example: '887038006' })
  password: string;
}
