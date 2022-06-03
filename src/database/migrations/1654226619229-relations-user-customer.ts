import {MigrationInterface, QueryRunner} from "typeorm";

export class relationsUserCustomer1654226619229 implements MigrationInterface {
    name = 'relationsUserCustomer1654226619229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_b8512aa9cef03d90ed5744c94d\` ON \`customers\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_b8512aa9cef03d90ed5744c94d\` ON \`customers\` (\`userId\`)`);
    }

}
