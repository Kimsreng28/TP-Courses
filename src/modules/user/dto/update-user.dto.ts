import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Username must be a string' })
  @Length(2, 50, { message: 'Username cannot be empty' })
  username?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @Length(2, 50, { message: 'Email cannot be empty' })
  email?: string;

  @IsOptional()
  @Length(6, 20, { message: 'Password must be between 6 and 20 characters' })
  password?: string;
}
