import { IsString, IsNumber, IsOptional, isString } from 'class-validator';

export class CreateProductDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly price: number;

    @IsOptional()
    @IsString()
    readonly description?: string
}