import { Entity, Column, JoinColumn, OneToOne, ManyToOne } from "typeorm";

import { Service } from "./service";
import Model from "./model";
import { Room } from "./room";

@Entity()
export class RoomService extends Model {
  @OneToOne(() => Service)
  service: Service;

  @ManyToOne(() => Room, (room: any) => room?.roomService)
  @JoinColumn()
  room: Room;
}
