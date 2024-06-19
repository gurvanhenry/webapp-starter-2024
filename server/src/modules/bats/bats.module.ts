import { Module } from '@nestjs/common';
import { BatsController } from './bats.controller';
import { BatsService } from './bats.service';

@Module({
  controllers: [BatsController],
  providers: [BatsService],
})
export class BatsModule {}
