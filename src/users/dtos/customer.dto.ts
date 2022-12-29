import { IsString, IsNotEmpty, IsPhoneNumber, IsOptional, IsPositive } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lastName: string;

  @IsOptional()
  @IsPositive()
  @ApiProperty()
  readonly userId: number;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
