import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";

import Model from "./model";
import { Room } from "./room";
import { Custormer } from "./customer";

@Entity()
export class Contract extends Model {
  @OneToOne(() => Custormer)
  @JoinColumn()
  custormer: Custormer;

  @OneToOne(() => Room)
  @JoinColumn()
  room: Room;

  @Column()
  contractDate: Date;

  @Column()
  constactExpiry: Date;
}
