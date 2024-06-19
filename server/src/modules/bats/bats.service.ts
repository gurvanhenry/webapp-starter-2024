import { BadRequestException, Injectable } from '@nestjs/common';
import { Bat } from './interfaces/bat.interface';
import { CreateDto } from './dto/create.dto';
import { ChangeStatusDto } from './dto/change-status.dto';
import { RemoveDto } from './dto/remove.dto';

@Injectable()
export class BatsService {
  private readonly bats: Bat[] = [{ id: 1, text: 'bat2', status: 'alive' }];

  create(createBatDto: CreateDto) {
    const newId = this.bats.length + 1;
    this.bats.push({
      id: newId,
      text: createBatDto.text,
      status: createBatDto.status,
    });
  }

  findAll() {
    return this.bats;
  }

  changeStatus(changeStatusDto: ChangeStatusDto) {
    const { id, status } = changeStatusDto;
    const index = this.bats.findIndex((bat) => bat.id === id);
    if (index === -1) {
      throw new BadRequestException('bat not found');
    }
    this.bats[index].status = status;
  }

  remove(removeDto: RemoveDto) {
    const { id } = removeDto;
    const index = this.bats.findIndex((bat) => bat.id === id);
    if (index === -1) {
      throw new BadRequestException('bat not found');
    }
    this.bats.splice(index, 1);
  }
}
