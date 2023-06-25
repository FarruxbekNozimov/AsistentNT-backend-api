import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentsDto {
  @ApiProperty({ example: "Toshmat" })
	name?: string;

	@ApiProperty({ example: "Eshmatov" })
	surname?: string;

	@ApiProperty({ example: "16" })
	age?: string;

	@ApiProperty({ example: "887038006" })
	phone?: string;

	@ApiProperty({ example: "" })
	telegram_id?: number;

	@ApiProperty({ example: "https://picsum.photos/1000/1000" })
	photo?: string;

	@ApiProperty({ example: "true" })
	gender?: boolean;

	@ApiProperty({ example: "" })
	group_id?: number;

	@ApiProperty({ example: "true" })
	is_active?: boolean;

	@ApiProperty({ example: "" })
	token?: string;

	
}
