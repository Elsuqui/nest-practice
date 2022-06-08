import {MigrationInterface, QueryRunner} from "typeorm";

export class relacionMuchosAMuchos1654316535078 implements MigrationInterface {
    name = 'relacionMuchosAMuchos1654316535078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`products_categories_categories\` (\`productsId\` int NOT NULL, \`categoriesId\` int NOT NULL, INDEX \`IDX_40e7da0284a5389344605de8da\` (\`productsId\`), INDEX \`IDX_e1d833224b5be535323207473f\` (\`categoriesId\`), PRIMARY KEY (\`productsId\`, \`categoriesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`categories\` ADD \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`categories\` ADD \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`products_categories_categories\` ADD CONSTRAINT \`FK_40e7da0284a5389344605de8dab\` FOREIGN KEY (\`productsId\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_categories_categories\` ADD CONSTRAINT \`FK_e1d833224b5be535323207473f1\` FOREIGN KEY (\`categoriesId\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products_categories_categories\` DROP FOREIGN KEY \`FK_e1d833224b5be535323207473f1\``);
        await queryRunner.query(`ALTER TABLE \`products_categories_categories\` DROP FOREIGN KEY \`FK_40e7da0284a5389344605de8dab\``);
        await queryRunner.query(`ALTER TABLE \`categories\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`categories\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`DROP INDEX \`IDX_e1d833224b5be535323207473f\` ON \`products_categories_categories\``);
        await queryRunner.query(`DROP INDEX \`IDX_40e7da0284a5389344605de8da\` ON \`products_categories_categories\``);
        await queryRunner.query(`DROP TABLE \`products_categories_categories\``);
    }

}
