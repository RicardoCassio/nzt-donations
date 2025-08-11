import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
  IsIn,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsIn(['admin', 'user', 'moderator'])
  role?: 'admin' | 'user' | 'moderator';

  @IsOptional()
  @IsUrl({}, { message: 'profilePhoto deve ser uma URL válida' })
  profilePhoto?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  @Length(2, 2, { message: 'UF deve ter exatamente 2 caracteres' })
  uf?: string;
}
