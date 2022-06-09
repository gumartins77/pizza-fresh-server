import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateOrderProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID a product',
    example: '28dcf2a7-1a96-4d4f-aef3-a5709e2ca1fb',
  })
  productId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantity a products',
    example: 2,
  })
  quantity: number;

  @IsString()
  @ApiProperty({
    description: 'Description a products',
    example: 'No cebola',
  })
  description: string;
}
