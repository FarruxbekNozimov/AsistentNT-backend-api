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
import { AssistantsService } from './assistants.service';
import { CreateAssistantsDto } from './dto/create-assistants.dto';
import { UpdateAssistantsDto } from './dto/update-assistants.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('Assistants')
@Controller('assistants')
export class AssistantsController {
  constructor(private readonly assistantsService: AssistantsService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create assistants' })
  @Post()
  create(@Body() createAssistantsDto: CreateAssistantsDto) {
    return this.assistantsService.create(createAssistantsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all assistants' })
  @Get()
  findAll(@Query() query: any) {
    return this.assistantsService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one assistants' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assistantsService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update assistants by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAssistantsDto: UpdateAssistantsDto) {
    return this.assistantsService.update(id, updateAssistantsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete assistants by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assistantsService.remove(id);
  }
}
