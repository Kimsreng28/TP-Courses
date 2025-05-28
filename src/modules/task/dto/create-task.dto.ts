import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'name should not be empty' })
  @IsString({ message: 'Name must be a string' })
  name!: string;

  @IsString({ message: 'Description must be a string' })
  description?: string;

  @IsOptional()
  completedAt?: Date;

  @IsInt()
  userId: number;
}
