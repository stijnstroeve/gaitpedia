import {Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class WikiEntry {

    @PrimaryGeneratedColumn()
    id: number;

    @Index({ unique: true })
    @Column()
    original: string;

    @Column()
    definition: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @Column()
    deletedAt: Date;

    get isDeleted(): boolean {
        return this.deletedAt != null;
    }

    set isDeleted(value: boolean) {
        if(value) {
            this.deletedAt = new Date();
        } else {
            this.deletedAt = null;
        }
    }

}