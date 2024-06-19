import { Body, Controller, Post } from '@nestjs/common';
import { BatsService } from './bats.service';
import { CreateDto } from './dto/create.dto';
import { ChangeStatusDto } from './dto/change-status.dto';
import { RemoveDto } from './dto/remove.dto';

@Controller('/bats')
export class BatsController {
  constructor(private readonly batsService: BatsService) {}

  @Post('/create')
  create(@Body() createBatDto: CreateDto) {
    this.batsService.create(createBatDto);
  }

  @Post('/changeStatus')
  changeStatus(@Body() changeStatusDto: ChangeStatusDto) {
    this.batsService.changeStatus(changeStatusDto);
  }

  @Post('/findAll')
  findAll() {
    return this.batsService.findAll();
  }

  @Post('/remove')
  remove(@Body() removeDto: RemoveDto) {
    this.batsService.remove(removeDto);
  }
}
