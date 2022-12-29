import {MigrationInterface, QueryRunner} from "typeorm";

export class newFields1654202705833 implements MigrationInterface {
    name = 'newFields1654202705833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD UNIQUE INDEX \`IDX_b8512aa9cef03d90ed5744c94d\` (\`userId\`)`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_b8512aa9cef03d90ed5744c94d\` ON \`customers\` (\`userId\`)`);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD CONSTRAINT \`FK_b8512aa9cef03d90ed5744c94d7\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`FK_b8512aa9cef03d90ed5744c94d7\``);
        await queryRunner.query(`DROP INDEX \`REL_b8512aa9cef03d90ed5744c94d\` ON \`customers\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP INDEX \`IDX_b8512aa9cef03d90ed5744c94d\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`createdAt\``);
    }

}
