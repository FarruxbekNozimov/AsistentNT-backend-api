import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { CreateRatingsDto } from './dto/create-ratings.dto';
import { UpdateRatingsDto } from './dto/update-ratings.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('Ratings')
@Controller('ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create ratings' })
  @Post()
  create(@Body() createRatingsDto: CreateRatingsDto) {
    return this.ratingsService.create(createRatingsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all ratings' })
  @Get()
  findAll(@Query() query: any) {
    return this.ratingsService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one ratings' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratingsService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update ratings by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRatingsDto: UpdateRatingsDto) {
    return this.ratingsService.update(id, updateRatingsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete ratings by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratingsService.remove(id);
  }
}
