import {
  Entity,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import Model from "./model";
import { auth } from "./auth";
import { Room } from "./room";
import { ListMember } from "./listMember";
import { House } from "./house";

@Entity()
export class Custormer extends Model {
  @Column()
  name: string;

  @Column()
  is_blocked: boolean;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  other: string;

  @Column()
  cardNumber: number;

  @Column()
  avatar: string;

  @ManyToOne(() => Room, (room: any) => room.custormer)
  @JoinColumn()
  room: Room;

  @OneToOne(() => auth)
  @JoinColumn()
  auth: auth;

  @ManyToOne(() => House)
  @JoinColumn()
  house: House;

  @OneToMany(() => ListMember, (list: any) => list.custormer)
  @JoinColumn()
  listMember: ListMember;
}
