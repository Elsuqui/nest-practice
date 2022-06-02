import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

import { ProductsService } from './../../products/services/products.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository : Repository<User>,
    private productsService: ProductsService,
    private configService: ConfigService,
  ) {}

  findAll() : Promise<User[]>{
    return this.userRepository.find();
  }

  findOne(id : number) : Promise<User>{
    return this.userRepository.findOne(id);
  }

  create(data: CreateUserDto) : Promise<User>{
    const newUser = this.userRepository.create(data);
    return this.userRepository.save(newUser);
  }

  async update(id: number, changes: UpdateUserDto) : Promise<User>{
    const user = await this.userRepository.findOne(id);
    this.userRepository.merge(user, changes);
    return this.userRepository.save(user);
  }

  async remove(id : number) {
    return this.userRepository.delete(id);
  }

  /*private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'correo@mail.com',
      password: '12345',
      role: 'admin',
    },
  ];

  findAll() {
    const apiKey = this.configService.get('API_KEY');
    const dbName = this.configService.get('DATABASE_NAME');
    console.log(apiKey, dbName);
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  create(data: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, changes: UpdateUserDto) {
    const user = this.findOne(id);
    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }

  async getOrderByUser(id: number) {
    const user = this.findOne(id);
    const products = await this.productsService.findAll();
    return {
      date: new Date(),
      user,
      products: products,
    };
  }*/
}
