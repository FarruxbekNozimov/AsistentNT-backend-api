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
import { DirectionsService } from './directions.service';
import { CreateDirectionsDto } from './dto/create-directions.dto';
import { UpdateDirectionsDto } from './dto/update-directions.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('Directions')
@Controller('directions')
export class DirectionsController {
  constructor(private readonly directionsService: DirectionsService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create directions' })
  @Post()
  create(@Body() createDirectionsDto: CreateDirectionsDto) {
    return this.directionsService.create(createDirectionsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all directions' })
  @Get()
  findAll(@Query() query: any) {
    return this.directionsService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one directions' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directionsService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update directions by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDirectionsDto: UpdateDirectionsDto) {
    return this.directionsService.update(id, updateDirectionsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete directions by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directionsService.remove(id);
  }
}
