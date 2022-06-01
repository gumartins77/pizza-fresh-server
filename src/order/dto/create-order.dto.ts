import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUUID } from 'class-validator';

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

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'List with the IDs of the products that are in the order',
    example: [
      '28dcf2a7-1a96-4d4f-aef3-a5709e2ca1fb',
      '7cb1bccd-93f4-48c8-ab03-2cff2581c355',
    ],
  })
  products: string[];
}
