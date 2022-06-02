import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { Product } from './entities/product.entity';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
import { Category } from './entities/category.entity';
import { Brand } from './entities/brand.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Product, Category, Brand]) ],
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductsService, BrandsService, CategoriesService],
  exports: [ProductsService],
})
export class ProductsModule {}
