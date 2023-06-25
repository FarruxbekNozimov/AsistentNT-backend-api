import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoomsDto {
  @ApiProperty({ example: "Google" })
	name?: string;

	@ApiProperty({ example: "2-qavat" })
	route?: string;

	
}
