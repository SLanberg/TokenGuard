import {Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class SecretCode {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("bigint")
    code!: bigint;

    @CreateDateColumn()
    created_at!: Date;

    constructor() {this.id = 0;}
}
