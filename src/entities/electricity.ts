import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

import Model from "./model";
import { Room } from "./room";
import { RoomService } from "./roomService";

@Entity()
export class Electricity extends Model {
  @Column({ name: "indexOLD", type: "text" })
  indexOLD: number;

  @Column()
  indexNEW: number;

  @Column()
  time: Date;

  @Column()
  used: Number;

  @ManyToOne(() => Room, (room: any) => room?.electricity)
  @JoinColumn()
  room: Room;

  // @ManyToOne(() =>auth, (user: any) => user.house)
  // user: auth;

  // @OneToMany(() => Room, (room: any) => room.house)
  // rooms: Room[];
}
