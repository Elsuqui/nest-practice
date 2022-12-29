import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {

  constructor(
    @InjectRepository(Brand) private brandRepo: Repository<Brand>
  ) { }

  findAll() {
    return this.brandRepo.find({
      relations: ['products']
    });
  }

  findOne(id: number) {
    const product = this.brandRepo.findOne(id);
    if (!product) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return product;
  }

  create(data: CreateBrandDto) {
    const newBrand = this.brandRepo.create(data);
    return this.brandRepo.save(newBrand);
  }

  async update(id: number, changes: UpdateBrandDto) {
    const brand = await this.brandRepo.findOne(id);
    const updatedBrand = this.brandRepo.merge(brand, changes);
    return this.brandRepo.save(updatedBrand);
  }

  remove(id: number) {
    const brand = this.brandRepo.findOne(id);
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return this.brandRepo.delete(id);
  }
}
