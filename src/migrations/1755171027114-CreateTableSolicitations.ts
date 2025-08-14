import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableSolicitations1755171027114 implements MigrationInterface {
    name = 'CreateTableSolicitations1755171027114'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."solicitation_status_enum" AS ENUM('pending', 'in_progress', 'completed', 'cancelled')`);
        await queryRunner.query(`CREATE TABLE "solicitation" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text NOT NULL, "status" "public"."solicitation_status_enum" NOT NULL DEFAULT 'pending', "valor" bigint NOT NULL, "chavePix" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "user_id" integer, CONSTRAINT "PK_00a04c95007d83fd505e3a199e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "solicitation" ADD CONSTRAINT "FK_bb46e03ef99165b60be17315438" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "solicitation" DROP CONSTRAINT "FK_bb46e03ef99165b60be17315438"`);
        await queryRunner.query(`DROP TABLE "solicitation"`);
        await queryRunner.query(`DROP TYPE "public"."solicitation_status_enum"`);
    }

}
