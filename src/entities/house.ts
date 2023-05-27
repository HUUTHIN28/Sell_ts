import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { auth } from "./auth";
import Model from "./model";
import { Room } from "./room";

@Entity()
export class House extends Model {
  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  img: string;

  @Column()
  phone: number;

  @OneToMany(() => Room, (room: any) => room.house)
  rooms: Room[];
}
