import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Product) private productRepo : Repository<Product>){}

  async findAll(){
    return await this.productRepo.find();
  }

  findOne(id: number){
    return this.productRepo.findOne(id);
  }

  create(data: CreateProductDto){
    /*newProduct.image = data.image;
    newProduct.name = data.name;
    newProduct.description = data.description;
    newProduct.price = data.price;
    newProduct.image = data.image;*/
    // Create a new instance of product in memory, but it doesnt save it in database
    const newProduct = this.productRepo.create(data);
    return this.productRepo.save(newProduct);
  }

  async update(id: number, changes: UpdateProductDto){
    const product = await this.productRepo.findOne(id);
    // Try to update product information with changes comming in request
    this.productRepo.merge(product, changes);
    return this.productRepo.save(product);
  }

  remove(id: number){
    return this.productRepo.delete(id);
  }
 
  /*findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(data: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, changes: UpdateProductDto) {
    const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }*/
}
