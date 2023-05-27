import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export default abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;
  // @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  // createdAt: Date;
  // @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  // updatedAt: Date;
  // @Column({ name: "created_by", type: "bigint", nullable: true })
  // createdBy: number;
}
