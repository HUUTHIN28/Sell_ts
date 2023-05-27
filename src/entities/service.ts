import { Entity, Column } from "typeorm";

import Model from "./model";

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
}
