import {
  Entity,
  Column,
  JoinColumn,
  OneToOne,
  ManyToOne,
  OneToMany,
} from "typeorm";

import { Service } from "./service";
import Model from "./model";
import { Room } from "./room";
import { Electricity } from "./electricity";
import { Water } from "./water";

@Entity()
export class RoomService extends Model {
  @ManyToOne(() => Room, (room: any) => room?.roomService)
  @JoinColumn()
  room: Room;

  @ManyToOne(() => Service, (Service: any) => Service?.roomService)
  @JoinColumn()
  service: Service;
}
