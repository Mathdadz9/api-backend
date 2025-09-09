import { IsString, IsNumber, IsNotEmpty, Min } from "class-validator";

export class createProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;


  @IsNumber()
  @Min(0)
  price: number;
} 
