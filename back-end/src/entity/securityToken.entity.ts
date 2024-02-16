import {
    Column, CreateDateColumn, Entity,
    JoinColumn, ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import {User} from "./user.entity";
import {SecretCode} from "./secretCode.entity";

@Entity()
export class SecurityToken {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name: "userId"})
    user_id!: number;

    @ManyToOne(() => SecretCode, (secretCode) => secretCode.id)
    @JoinColumn({name: "secretId"})
    secret_code_id!: number;

    @Column("varchar", { nullable: false })
    security_token!: string;

    @CreateDateColumn({ nullable: false })
    created_at!: Date;

    constructor() {this.id = 0;}
}