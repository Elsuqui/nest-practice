import { User } from './user.entity';
import { Product } from './../../products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'orders'})
export class Order {
  @PrimaryGeneratedColumn()
  date: Date;
  user: User;
  products: Product[];
}
