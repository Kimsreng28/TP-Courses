import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Username is required' })
  @IsString({ message: 'Username must be a string' })
  @Matches(/^[a-zA-Z0-9]{2,15}$/, {
    message:
      'Username must be 2-15 characters long and can only contain letters and numbers',
  })
  username: string;

  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @Matches(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/, {
    message: 'Email must be a valid email address',
  })
  email: string;

  @Length(6, 20, { message: 'Password must be between 6 and 20 characters' })
  @IsNotEmpty({ message: 'Password is required' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,20}$/, {
    message:
      'Password must be 6-20 characters long and contain at least one uppercase letter, one number, and one special character or symbol',
  })
  password: string;
}
