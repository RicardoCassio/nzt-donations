import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SolicitationsService } from './solicitations.service';
import { CreateSolicitationDto } from './dto/create-solicitation.dto';
import { UpdateSolicitationDto } from './dto/update-solicitation.dto';

@Controller('solicitations')
export class SolicitationsController {
  constructor(private readonly solicitationsService: SolicitationsService) {}

  @Post()
  create(@Body() createSolicitationDto: CreateSolicitationDto) {
    return this.solicitationsService.create(createSolicitationDto);
  }

  @Get()
  findAll() {
    return this.solicitationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSolicitationDto: UpdateSolicitationDto,
  ) {
    return this.solicitationsService.update(+id, updateSolicitationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitationsService.remove(+id);
  }
}
