import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const jwtAuthGuard = app.get(JwtAuthGuard); // IMPORTANTE: injeta via DI
  app.useGlobalGuards(jwtAuthGuard); // agora aplicado globalmente

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
