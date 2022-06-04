import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Brand } from './brand.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  // Define column with options 
  @Column({type: 'varchar', length: 255, unique: true})
  name: string;

  @Column({ type: 'text'})
  description: string;

  @Column({ type: 'decimal'})
  price: number;

  @Column({ type: 'int'})
  stock: number;

  @Column({type: 'varchar', nullable: true})
  image: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)'})
  created_at : Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)'})
  updated_at : Date;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand : Brand
}
