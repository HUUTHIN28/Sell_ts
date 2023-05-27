import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Model from "./model";

@Entity({ name: "auth", schema: "public" })
export class auth extends Model {
  @Column({ name: "email", type: "text", nullable: false })
  email: string;

  @Column({ name: "password", type: "text", nullable: false })
  password: string;

  @Column({ name: "role", type: "text", nullable: false })
  role: string;

  @Column({ name: "phone", type: "text", nullable: false })
  user: string;
}
