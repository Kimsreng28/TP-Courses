import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @Length(2, 50, { message: 'Name cannot be empty' })
  name?: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  @Length(0, 255, { message: 'Description cannot exceed 255 characters' })
  description?: string;

  @IsOptional()
  completedAt?: Date;
}
