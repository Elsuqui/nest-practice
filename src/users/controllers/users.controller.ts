import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  Catch,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
import { QueryFailedError } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  /*@Get(':id/orders')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getOrderByUser(id);
  }*/

  @Post()
  async create(@Body() payload: CreateUserDto) {
    try{
      const userExist : User = await this.usersService.findBy('email', payload.email);
      if(userExist){
        throw new HttpException('Ya existe usuario con el email ingresado', HttpStatus.CONFLICT);
      }
      return await this.usersService.create(payload);
    }catch(e){
      if(e instanceof QueryFailedError){
        Logger.error(e.message);
        throw new HttpException('Error en al crear usuario', HttpStatus.BAD_REQUEST);
      }
      throw e;
    }
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ) {
    return this.usersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(+id);
  }
}
