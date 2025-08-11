import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateSolicitationDto } from './dto/update-solicitation.dto';
import { Solicitation } from './entities/solicitation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SolicitationsService {
  constructor(
    @InjectRepository(Solicitation)
    private solicitationRepository: Repository<Solicitation>,
  ) {}

  async create(solicitationData: Partial<Solicitation>): Promise<Solicitation> {
    const solicitation = this.solicitationRepository.create(solicitationData)
    return this.solicitationRepository.save(solicitation);
  }

  findAll() {
    return Solicitation;
  }

  async findOneByID(id: number): Promise<Solicitation> {
    const solicitation = await this.solicitationRepository.findOne({
      where: { id },
    });
    if (!solicitation) {
      throw new NotFoundException(`Solicitation with id ${id} not found`);
    }
    return solicitation;
  }

  update(id: number, updateSolicitationDto: UpdateSolicitationDto) {
    return `This action updates a #${id} solicitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitation`;
  }
}
