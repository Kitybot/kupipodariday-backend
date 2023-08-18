import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignupResponseDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  about: string;

  @IsString()
  avatar: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  createdAt: Date;

  @IsNotEmpty()
  updatedAt: Date;
}
