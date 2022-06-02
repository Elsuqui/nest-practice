import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  email: string;
  
  @Column({ type: 'varchar', length: 255 })
  password: string;
  
  @Column({ type: 'varchar' })
  role: string;

  @CreateDateColumn({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP'})
  createdAt : Date;

  @UpdateDateColumn({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP'})
  updatedAt : Date;
}
