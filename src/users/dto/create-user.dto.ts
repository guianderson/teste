import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Genre } from '../enums/Genre';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "User's first name",
    required: true,
    minLength: 6,
  })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "User's last name",
    required: true,
    minLength: 6,
  })
  lastName: string;

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

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    description: "User's birthday date",
    required: false,
    nullable: true,
    minLength: 3,
  })
  birthDate: Date;

  @IsOptional()
  @ApiProperty({
    description: "User's genre",
    required: true,
    nullable: true,
    enum: Genre,
  })
  genre: Genre;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: "User's avatar",
    default: null,
    required: false,
    nullable: true,
  })
  avatar: string;

  @IsOptional()
  @ApiProperty({
    description: 'User is admin',
    required: false,
    nullable: false,
    default: false,
  })
  isAdmin: boolean;
}
