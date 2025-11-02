import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Body('id') id: number) {
    return this.service.findOne(id);
  }
  @Post()
  create(@Body() user) {
    return this.service.create(user);
  }
  @Put(':id')
  update(@Body('id') id: number, @Body() user) {
    return this.service.update(id, user);
  }
  @Delete(':id')
  remove(@Body('id') id: number) {
    return this.service.remove(id);
  }
}
