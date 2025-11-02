import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity('tareas')
export class Tarea {
  @PrimaryGeneratedColumn()
  idtarea: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'idusuario' })
  idusuario: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;

  @Column()
  estatus: number;
}
