import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  Min,
  IsIn,
} from 'class-validator';

export class CreateSolicitationDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsIn(['pending', 'in_progress', 'completed', 'cancelled'])
  @IsOptional()
  status?: 'pending' | 'in_progress' | 'completed' | 'cancelled';

  @IsInt()
  @Min(1)
  valor: number; // valor em centavos (ex: R$ 10,00 → 1000)

  @IsString()
  @IsNotEmpty()
  chavePix: string;
}
