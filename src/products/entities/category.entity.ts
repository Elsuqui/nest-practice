import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity({name: 'categories'})
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', unique: true})
  name: string;
  
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt : Date;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  updatedAt : Date;

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[]


}
