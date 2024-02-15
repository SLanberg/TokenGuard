import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("bigint", { unique: true })
    telegram_id!: bigint;

    @Column("varchar")
    password!: string;

    @CreateDateColumn()
    created_at!: Date;

    constructor() {this.id = 0;}
}