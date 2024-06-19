import { IsNumber, IsString } from 'class-validator';

export class ChangeStatusDto {
  @IsNumber()
  id: number;

  @IsString()
  status: string;
}
