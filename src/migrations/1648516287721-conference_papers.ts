import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class conferences_papers1648065315900 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'conference_papers',
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
            name: 'volume',
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
            name: 'final_page',
            type: 'varchar',
          },
          {
            name: 'conference_edition_id',
            type: 'uuid',
          },
        ],
      }),
      true,
    )
    await queryRunner.createForeignKey(
      'conference_papers',
      new TableForeignKey({
        columnNames: ['conference_edition_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'conference_editions',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('conference_papers')
  }
}
