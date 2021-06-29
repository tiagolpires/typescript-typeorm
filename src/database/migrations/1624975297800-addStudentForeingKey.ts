import {MigrationInterface, QueryRunner} from "typeorm";

export class addStudentForeingKey1624975297800 implements MigrationInterface {
    name = 'addStudentForeingKey1624975297800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `UQ_24df989b55675f5085e18348ace` ON `seats`");
        await queryRunner.query("ALTER TABLE `students` CHANGE `seatId` `seatId` int UNSIGNED NULL");
        await queryRunner.query("ALTER TABLE `students` ADD UNIQUE INDEX `IDX_96a32b54e54e00fd5efbfd637e` (`seatId`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_96a32b54e54e00fd5efbfd637e` ON `students` (`seatId`)");
        await queryRunner.query("ALTER TABLE `students` ADD CONSTRAINT `FK_96a32b54e54e00fd5efbfd637e1` FOREIGN KEY (`seatId`) REFERENCES `seats`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `students` DROP FOREIGN KEY `FK_96a32b54e54e00fd5efbfd637e1`");
        await queryRunner.query("DROP INDEX `REL_96a32b54e54e00fd5efbfd637e` ON `students`");
        await queryRunner.query("ALTER TABLE `students` DROP INDEX `IDX_96a32b54e54e00fd5efbfd637e`");
        await queryRunner.query("ALTER TABLE `students` CHANGE `seatId` `seatId` int NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `UQ_24df989b55675f5085e18348ace` ON `seats` (`number`)");
    }

}
