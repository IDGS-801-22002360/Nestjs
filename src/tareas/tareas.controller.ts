import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { TareasService } from './tareas.service';

@Controller('tareas')
export class TareasController {
  constructor(private service: TareasService) {}

  @Get()
  GetAll() {
    return this.service.getAll();
  }
  @Post()
  create(@Body() tarea) {
    return this.service.create(tarea);
  }

  @Put(':id')
  update(@Body('id') id: number, @Body() tarea) {
    return this.service.update(id, tarea);
  }

  @Delete(':id')
  delete(@Body('id') id: number) {
    return this.service.delete(id);
  }
}
