import {
  Entity,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import Model from "./model";
import { Custormer } from "./customer";

@Entity()
export class ListMember extends Model {
  @Column()
  host: number;

  @Column()
  name: string;

  @ManyToOne(() => Custormer, (custormer) => custormer.listMember)
  @JoinColumn()
  custormer: Custormer;
}
