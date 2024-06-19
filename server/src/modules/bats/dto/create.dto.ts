import { IsString } from 'class-validator';

export class CreateDto {
  @IsString()
  text: string;

  @IsString()
  status: string;
}
