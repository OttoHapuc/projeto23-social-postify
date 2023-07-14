import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class UpUserDTO{
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @IsOptional()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @IsStrongPassword({
      minLength: 6,
      minNumbers: 1,
      minSymbols: 1,
      minLowercase: 1,
      minUppercase: 1,
    })
    @IsOptional()
    password: string;
}