import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User} from './user.entity';

@Entity({name: 'customers'})
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'varchar' })
  lastName: string;
  @Column({ type: 'varchar' })
  phone: string;

  @CreateDateColumn({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP'})
  createdAt : Date;

  @UpdateDateColumn({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP'})
  updatedAt : Date;

  @OneToOne(() => User , { nullable: true })
  @JoinColumn()
  user : User;
}
