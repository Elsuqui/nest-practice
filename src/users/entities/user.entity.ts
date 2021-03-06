import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

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
}
