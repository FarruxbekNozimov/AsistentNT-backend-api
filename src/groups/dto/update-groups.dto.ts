import { ApiProperty } from '@nestjs/swagger';

export class UpdateGroupsDto {
  @ApiProperty({ example: "" })
	direction_id?: number;

	@ApiProperty({ example: "N7" })
	group_number?: string;

	@ApiProperty({ example: "Scott" })
	teacher?: string;

	@ApiProperty({ example: "" })
	assistant_id?: number;

	@ApiProperty({ example: "Dushanba,Chorshanba,Juma" })
	day?: string;

	@ApiProperty({ example: "14:00" })
	time?: string;

	@ApiProperty({ example: "Sunday, June 25, 2023" })
	start_date?: string;

	@ApiProperty({ example: "https://marketing.uz/uz/uploads/works/covers/c6c1569b46e710f6ffefdfb5d8f046d7.jpg" })
	photo?: string;

	@ApiProperty({ example: "" })
	room_id?: number;

	@ApiProperty({ example: "true" })
	is_active?: boolean;

	
}
