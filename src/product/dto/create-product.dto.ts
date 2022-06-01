import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'The product name.',
    example: 'Mozzarella Pizza',
  })
  name: string;
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'The product price.',
    example: 12.34,
  })
  price: number;
  @IsString()
  @ApiProperty({
    description: 'The product description.',
    example: 'Thin mozzarella cheese, thin crust and rim filled with catupiry.',
  })
  description: string;
  @IsUrl()
  @ApiProperty({
    description: 'The product image.',
    example: 'https://i.imgur.com/hNE75Iw.png',
  })
  image: string;
}
