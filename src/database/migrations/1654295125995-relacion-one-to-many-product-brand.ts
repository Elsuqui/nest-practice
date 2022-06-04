import {MigrationInterface, QueryRunner} from "typeorm";

export class relacionOneToManyProductBrand1654295125995 implements MigrationInterface {
    name = 'relacionOneToManyProductBrand1654295125995'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`brandId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`brands\` ADD \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`brands\` ADD \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_ea86d0c514c4ecbb5694cbf57df\` FOREIGN KEY (\`brandId\`) REFERENCES \`brands\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_ea86d0c514c4ecbb5694cbf57df\``);
        await queryRunner.query(`ALTER TABLE \`brands\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`brands\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`brandId\``);
    }

}
