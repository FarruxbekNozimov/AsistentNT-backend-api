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
import { TelegramsService } from './telegrams.service';
import { CreateTelegramsDto } from './dto/create-telegrams.dto';
import { UpdateTelegramsDto } from './dto/update-telegrams.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('Telegrams')
@Controller('telegrams')
export class TelegramsController {
  constructor(private readonly telegramsService: TelegramsService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create telegrams' })
  @Post()
  create(@Body() createTelegramsDto: CreateTelegramsDto) {
    return this.telegramsService.create(createTelegramsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all telegrams' })
  @Get()
  findAll(@Query() query: any) {
    return this.telegramsService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one telegrams' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.telegramsService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update telegrams by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTelegramsDto: UpdateTelegramsDto) {
    return this.telegramsService.update(id, updateTelegramsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete telegrams by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.telegramsService.remove(id);
  }
}
