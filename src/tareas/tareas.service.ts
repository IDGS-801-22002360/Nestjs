import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from './tarea.entity';

@Injectable()
export class TareasService {
  constructor(
    @InjectRepository(Tarea)
    private tareaRepository: Repository<Tarea>,
  ) {}

  getAll(): Promise<Tarea[]> {
    return this.tareaRepository.find({ where: { estatus: 1 } });
  }

  create(tarea: Tarea): Promise<Tarea> {
    return this.tareaRepository.save(tarea);
  }

  async update(id: number, tarea: Tarea): Promise<Tarea | null> {
    await this.tareaRepository.update(id, tarea);
    return this.tareaRepository.findOneBy({ idtarea: id });
  }

  async delete(id: number): Promise<void> {
    await this.tareaRepository.delete(id);
  }
}
