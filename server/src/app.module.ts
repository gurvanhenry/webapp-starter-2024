import { Module, ValidationPipe } from '@nestjs/common';
import { BatsModule } from './modules/bats/bats.module';
import { AppController } from './app.controller';
import { APP_PIPE } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [BatsModule, AuthModule, UsersModule],
  controllers: [AppController, AuthController],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }, AuthService],
})
export class AppModule {}
