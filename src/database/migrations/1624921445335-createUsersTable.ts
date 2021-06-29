import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class createUsersTable1624921445335 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'students',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: `increment`,
                },
                {
                    name: 'name',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('students')
    }

}
