import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { SolicitationsService } from './solicitations.service';
import { CreateSolicitationDto } from './dto/create-solicitation.dto';
import { UpdateSolicitationDto } from './dto/update-solicitation.dto';

@Controller('solicitations')
export class SolicitationsController {
  constructor(private readonly solicitationsService: SolicitationsService) {}

  @Post()
  create(
    @Body() createSolicitationDto: CreateSolicitationDto,
    @Request() req: Request & { user: { id: number } }, // tipagem segura
  ) {
    const userId = req.user.id; // 🔹 vem do JWT payload
    return this.solicitationsService.create(createSolicitationDto, userId);
  }

  @Get()
  findAll() {
    return this.solicitationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitationsService.findOneByID(+id);
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
