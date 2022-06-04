import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersService } from './users.service';

@Injectable()
export class CustomersService {

  constructor(
    @InjectRepository(Customer) private customerRepo : Repository<Customer>,
    private userService : UsersService
  ){}

  findAll() {
    // Get with listed relations
    return this.customerRepo.find({
      relations: ['user']
    });
  }

  async findOne(id: number) {
    //const customer = this.customers.find((item) => item.id === id);
    const customer = await this.customerRepo.findOne(id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  async create(data: CreateCustomerDto) {
    /*this.counterId = this.counterId + 1;
    const newCustomer = {
      id: this.counterId,
      ...data,
    };
    this.customers.push(newCustomer);
    return newCustomer;*/
    const newCustomer = this.customerRepo.create(data);
    if(data.userId){
      const user = await this.userService.findOne(data.userId);
      newCustomer.user = user;
    }
    return this.customerRepo.save(newCustomer);
  }

  async update(id: number, changes: UpdateCustomerDto) {
    /*const customer = this.findOne(id);
    const index = this.customers.findIndex((item) => item.id === id);
    this.customers[index] = {
      ...customer,
      ...changes,
    };
    return this.customers[index];*/
    const customer = await this.customerRepo.findOne(id);
    const updatedCustomer = this.customerRepo.merge(customer, changes);
    return this.customerRepo.save(updatedCustomer);
  }

  async remove(id: number) {
    //const index = this.customers.findIndex((item) => item.id === id);
    const customer = await this.customerRepo.findOne(id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return this.customerRepo.delete(id);
  }
}
