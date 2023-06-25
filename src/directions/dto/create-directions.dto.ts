import { ApiProperty } from '@nestjs/swagger';

export class CreateDirectionsDto {
  @ApiProperty({ example: "Projectni tugatish" })
	name: string;

	@ApiProperty({ example: "true" })
	is_active: boolean;

	
}
