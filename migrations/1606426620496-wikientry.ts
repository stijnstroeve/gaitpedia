import {MigrationInterface, QueryRunner} from "typeorm";

export class wikientry1606426620496 implements MigrationInterface {
    name = 'wikientry1606426620496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wiki_entry" ("id" SERIAL NOT NULL, "original" character varying NOT NULL, "definition" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_5424451dbe05b3d76e3eb78bf72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_6b59fcfd6d9c27e972aded0c71" ON "wiki_entry" ("original") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_6b59fcfd6d9c27e972aded0c71"`);
        await queryRunner.query(`DROP TABLE "wiki_entry"`);
    }

}
