import { Module, ValidationPipe } from '@nestjs/common';
import { BatsModule } from './modules/bats/bats.module';
import { AppController } from './app.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [BatsModule],
  controllers: [AppController],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
