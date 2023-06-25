import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomsDto {
  @ApiProperty({ example: "Google" })
	name: string;

	@ApiProperty({ example: "2-qavat" })
	route: string;

	
}
