import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class journal_papers1648065315900 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'journal_papers',
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
            name: 'type',
            type: 'varchar',
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
            name: 'doi',
            type: 'varchar',
          },
          {
            name: 'language',
            type: 'varchar',
          },
          {
            name: 'home_page',
            type: 'varchar',
          },
          {
            name: 'volume',
            type: 'varchar',
          },
          {
            name: 'fascicle',
            type: 'varchar',
          },
          {
            name: 'series',
            type: 'varchar',
          },
          {
            name: 'initial_page',
            type: 'varchar',
          },
          {
            name: 'end_page',
            type: 'varchar',
          },
          {
            name: 'journal_id',
            type: 'uuid',
          },
        ],
      }),
      true
    );
    await queryRunner.createForeignKey(
      'journal_papers',
      new TableForeignKey({
        columnNames: ['journal_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'journals',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('journal_papers');
  }
}
