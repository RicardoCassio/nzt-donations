import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Solicitation } from './solicitations/entities/solicitation.entity';
import { User } from './users/entities/user.entity';

// Carrega variáveis de ambiente do .env
config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Solicitation],
  migrations: ['src/migrations/**/*.ts'],
  synchronize: false,
});
