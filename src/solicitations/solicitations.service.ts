import { Injectable } from '@nestjs/common';
import { CreateSolicitationDto } from './dto/create-solicitation.dto';
import { UpdateSolicitationDto } from './dto/update-solicitation.dto';

@Injectable()
export class SolicitationsService {
  create(createSolicitationDto: CreateSolicitationDto) {
    return 'This action adds a new solicitation';
  }

  findAll() {
    return `This action returns all solicitations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitation`;
  }

  update(id: number, updateSolicitationDto: UpdateSolicitationDto) {
    return `This action updates a #${id} solicitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitation`;
  }
}
