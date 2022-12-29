import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity({ name: 'brands' })
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({type: 'varchar'})
  name: string;
  @Column({type: 'varchar'})
  image: string;
  @CreateDateColumn({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt : Date
  @UpdateDateColumn({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP(6)' })
  updatedAt : Date
  @OneToMany(() => Product, (product) => product.brand)
  products : Product[]
}
