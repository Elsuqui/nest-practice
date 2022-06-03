import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { Customer } from './customer.entity';

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

  @CreateDateColumn({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP(6)'})
  createdAt : Date;

  @UpdateDateColumn({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP(6)'})
  updatedAt : Date;

  // Reference to customer entity one to one, you have to specific
  // what is the field to link the relation
  @OneToOne(() => Customer, (customer) => customer.user, { nullable: true })
  customer : Customer;
}
