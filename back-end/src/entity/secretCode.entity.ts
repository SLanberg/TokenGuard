import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SecretCode {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("bigint", { nullable: false })
    code!: bigint;

    @CreateDateColumn()
    created_at!: Date;

    constructor() {this.id = 0;}
}
