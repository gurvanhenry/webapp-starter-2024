import { IsNumber } from 'class-validator';

export class RemoveDto {
  @IsNumber()
  id: number;
}
