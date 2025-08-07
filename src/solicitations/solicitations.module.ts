import { Module } from '@nestjs/common';
import { SolicitationsService } from './solicitations.service';
import { SolicitationsController } from './solicitations.controller';

@Module({
  controllers: [SolicitationsController],
  providers: [SolicitationsService],
})
export class SolicitationsModule {}
