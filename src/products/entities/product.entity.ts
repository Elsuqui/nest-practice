import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at : Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updated_at : Date;
}
