import { Module } from '@nestjs/common';
import { SolicitationsService } from './solicitations.service';
import { SolicitationsController } from './solicitations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitation } from './entities/solicitation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitation])],
  controllers: [SolicitationsController],
  providers: [SolicitationsService],
})
export class SolicitationsModule {}
