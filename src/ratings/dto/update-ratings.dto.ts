import { ApiProperty } from '@nestjs/swagger';

export class UpdateRatingsDto {
  @ApiProperty({ example: "80" })
	mark?: string;

	@ApiProperty({ example: "" })
	assistant_id?: number;

	@ApiProperty({ example: "" })
	student_id?: number;

	@ApiProperty({ example: "" })
	task_id?: number;

	@ApiProperty({ example: "Bugun yaxshi tayyorlanibdi" })
	description?: string;

	@ApiProperty({ example: "2023.01.04" })
	date?: string;

	
}
