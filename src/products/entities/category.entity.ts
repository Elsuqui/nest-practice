import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity({name: 'categories'})
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', unique: true})
  name: string;
  @ManyToMany(() => Product, (product) => product.categories)
  products : Product[]
}
