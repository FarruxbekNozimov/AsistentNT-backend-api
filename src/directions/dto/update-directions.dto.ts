import { ApiProperty } from '@nestjs/swagger';

export class UpdateDirectionsDto {
  @ApiProperty({ example: "Projectni tugatish" })
	name?: string;

	@ApiProperty({ example: "true" })
	is_active?: boolean;

	
}
