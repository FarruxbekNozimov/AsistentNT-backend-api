import { ApiProperty } from '@nestjs/swagger';

export class UpdateTasksDto {
  @ApiProperty({ example: "Projectni tugatish" })
	title?: string;

	@ApiProperty({ example: "Projectni tugatishingiz kerak" })
	description?: string;

	@ApiProperty({ example: "2023.06.25" })
	start_time?: string;

	@ApiProperty({ example: "2023.07.02" })
	deadline?: string;

	
}
