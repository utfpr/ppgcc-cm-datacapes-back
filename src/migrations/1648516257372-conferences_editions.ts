import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class conference_editions1648065315900 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'conference_editions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
            default: `uuid_generate_v4()`,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'year',
            type: 'date',
          },
          {
            name: 'location',
            type: 'varchar',
          },
          {
            name: 'country',
            type: 'varchar',
          },
          {
            name: 'isbn',
            type: 'varchar',
          },
          {
            name: 'publisher_company_name',
            type: 'varchar',
          },
          {
            name: 'publisher_company_city',
            type: 'varchar',
          },
          {
            name: 'conference_id',
            type: 'uuid',
          },
        ],
      }),
      true
    );
    await queryRunner.createForeignKey(
      'conference_editions',
      new TableForeignKey({
        columnNames: ['conference_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'conferences',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('conference_editions');
  }
}
