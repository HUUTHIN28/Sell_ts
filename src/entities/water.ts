import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";

import Model from "./model";
import { Room } from "./room";
import { RoomService } from "./roomService";

@Entity()
export class Water extends Model {
  @Column()
  indexOLD: Number;

  @Column()
  indexNEW: Number;

  @Column()
  time: Date;

  @Column()
  used: number;

  @ManyToOne(() => Room, (room: any) => room?.water)
  @JoinColumn()
  room: Room;
}
