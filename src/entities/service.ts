import { Entity, Column, OneToMany, JoinColumn } from "typeorm";

import Model from "./model";
import { RoomService } from "./roomService";

@Entity()
export class Service extends Model {
  @Column()
  name: string;

  @Column()
  price: Number;

  @Column()
  type: string;

  @Column()
  note: string;

  @Column()
  active: boolean;

  @OneToMany(() => RoomService, (RoomService: any) => RoomService?.service)
  @JoinColumn()
  roomService: RoomService[];
}
