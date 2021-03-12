import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CustomerDto {
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsNumber()
    @IsNotEmpty()
    age : number;

    @IsString()
    @IsNotEmpty()
    document : string;
}