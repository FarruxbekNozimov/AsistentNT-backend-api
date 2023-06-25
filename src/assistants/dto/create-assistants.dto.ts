import { ApiProperty } from '@nestjs/swagger';

export class CreateAssistantsDto {
  @ApiProperty({ example: "Toshmat" })
	name: string;

	@ApiProperty({ example: "Eshmatov" })
	surname: string;

	@ApiProperty({ example: "887038006" })
	password: string;

	@ApiProperty({ example: "16" })
	age: string;

	@ApiProperty({ example: "" })
	direction_id: number;

	@ApiProperty({ example: "887038006" })
	phone: string;

	@ApiProperty({ example: "" })
	telegram_id: number;

	@ApiProperty({ example: "https://picsum.photos/1000/1000" })
	photo: string;

	@ApiProperty({ example: "true" })
	gender: boolean;

	@ApiProperty({ example: "true" })
	is_active: boolean;

	@ApiProperty({ example: "" })
	token: string;

	
}
