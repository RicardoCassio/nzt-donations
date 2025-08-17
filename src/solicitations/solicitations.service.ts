import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateSolicitationDto } from './dto/update-solicitation.dto';
import { Solicitation } from './entities/solicitation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SolicitationsService {
  constructor(
    @InjectRepository(Solicitation)
    private solicitationRepository: Repository<Solicitation>,
  ) {}

  async create(
    solicitationData: Partial<Solicitation>,
    userId: number,
  ): Promise<Solicitation> {
    if (!userId) {
      throw new Error('UserId não definido, verifique o JWT ou controller');
    }
    const solicitation = this.solicitationRepository.create({
      ...solicitationData,
      user: { id: userId } as User, // associa o usuário logado
    });

    return this.solicitationRepository.save(solicitation);
  }

  findAll() {
    //return Solicitation;
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
