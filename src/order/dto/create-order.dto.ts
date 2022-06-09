import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsPositive, IsUUID, ValidateNested } from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'User id that this order is created',
    example: '65a45338-82d0-415a-8c4b-5f12acbd06a1',
  })
  userId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Number of the table that is placing the order',
    example: 1,
  })
  tableNumber: number;

  @ValidateNested({
    each: true,
  })
  @Type(() => CreateOrderProductDto)
  @ApiProperty({
    description: 'List with the IDs of the products that are in the order',
    type: [CreateOrderProductDto],
  })
  products: CreateOrderProductDto[];
}
