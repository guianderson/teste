import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: "User's email",
    required: true,
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "User's password",
    required: true,
    minLength: 6,
  })
  password: string;
}
