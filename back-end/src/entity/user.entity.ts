import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("bigint", { unique: true, nullable: false })
    telegram_id!: bigint;

    @Column("varchar", { nullable: false })
    password!: string;

    @CreateDateColumn({ nullable: false })
    created_at!: Date;

    @Column("decimal", { precision: 15, scale: 2, default: 0 })
    balance: number;

    /*
     TODO:
        URL string to the user's picture
    */
    // @Column("varchar", { nullable: true })
    // avatarPicture?: string;

    /*
    TODO:
     Separating IP address history into its own entity enhances user tracking by ensuring precise
     data management, improved integrity, efficient analysis, scalability, and flexible maintenance.
     And allows blacklist specific ip addresses.
    */
    // @OneToMany(() => IpAddressHistory, ipAddressHistory => ipAddressHistory.user)
    // ipAddressHistory: IpAddressHistory[];

    /*
    TODO:
       Here I want to see all his requests to the tech support to see in the case of account
       investigation.
    */
    // @OneToMany(() => TechSupportContact, techSupportContact => techSupportContact.user)
    // techSupportHistory: TechSupportContact[];

    /*
     TODO:
        Indicates the user's loyalty or activity level.
    */
    // @Column("varchar", { default: 1 })
    // vipLevel?: string;

    /*
     TODO:
        Separate balance for bonus funds, subject to specific wagering requirements.
    */
    // @Column("numeric", { precision: 15, scale: 2, default: '0.00' })
    // bonusBalance!: string;

    /*
     TODO:
        Information about currently active sessions or devices logged into the account
        (This could be implemented as a separate entity or stored in a database table)
    */
    // ActiveSessions: Session[];

    /*
     TODO:
        Security settings such as two-factor authentication, security questions, etc.
        (These settings could be stored as JSON or in a related entity)
    */
    // SecuritySettings: SecuritySettings;

    /*
     TODO:
        Documents required for Know Your Customer (KYC) verification
        (This could be implemented as a separate entity or stored in a database table)
        KYC and AML departments will rely on this so it's a good thing to follow their requests
        on what would they want to see here as well.
    */
    // KYCDocuments: KYCDocument[];

    /*
     TODO:
        Options for setting deposit limits, self-exclusion, or other responsible gaming features
        (These settings could be stored as JSON or in a related entity)
    */
    // ResponsibleGamingSettings: ResponsibleGamingSettings;

    // TODO: Indicates whether the player is banned from the accessing games
    // It's a good thing to have here a reasons
    // Indicates whether the player is banned (true/false)
    // @Column("boolean", { default: false })
    // isBanned!: boolean;

    // TODO: Reason for the ban (if the player is banned)
    // @Column("varchar", { nullable: true })
    // banReason?: string;

    // TODO: Indicates whether the player is under investigation (true/false)
    // To not allow withdrawals
    // @Column("boolean", { default: false })
    // underInvestigation!: boolean;


constructor() {
		this.id = 0;
		this.balance = 0.00;
		// this.bonusBalance = 0.00;
}
}