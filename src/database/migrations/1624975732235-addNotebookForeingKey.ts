import {MigrationInterface, QueryRunner} from "typeorm";

export class addNotebookForeingKey1624975732235 implements MigrationInterface {
    name = 'addNotebookForeingKey1624975732235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_96a32b54e54e00fd5efbfd637e` ON `students`");
        await queryRunner.query("ALTER TABLE `notebooks` ADD `studentId` int UNSIGNED NULL");
        await queryRunner.query("ALTER TABLE `notebooks` ADD CONSTRAINT `FK_fb606a0c24a4555f2fe65b74c86` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `notebooks` DROP FOREIGN KEY `FK_fb606a0c24a4555f2fe65b74c86`");
        await queryRunner.query("ALTER TABLE `notebooks` DROP COLUMN `studentId`");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_96a32b54e54e00fd5efbfd637e` ON `students` (`seatId`)");
    }

}
