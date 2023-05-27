import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { House } from "./house";
import Model from "./model";
import { Electricity } from "./electricity";
import { Water } from "./water";
import { RoomService } from "./roomService";
import { auth } from "./auth";
import { Custormer } from "./customer";

@Entity()
export class Room extends Model {
  @Column()
  name: string;

  @Column()
  status: boolean;

  @Column()
  price: number;

  @ManyToOne(() => House, (house: any) => house.rooms)
  @JoinColumn()
  house: House;

  @OneToMany(() => Electricity, (electricity: any) => electricity?.room)
  @JoinColumn()
  electricity: Electricity[];

  @OneToMany(() => Water, (water: any) => water?.room)
  @JoinColumn()
  water: Water[];

  @OneToMany(() => Custormer, (custormer) => custormer.room)
  @JoinColumn()
  custormer: Custormer;

  @OneToMany(() => RoomService, (roomservice: any) => roomservice?.room)
  @JoinColumn()
  roomService: RoomService;
}
