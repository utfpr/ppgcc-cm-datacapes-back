import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class journal_paper_author1648066413298 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'journal_paper_author',
        columns: [
          {
            name: 'author_id',
            type: 'uuid',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
            default: `uuid_generate_v4()`,
          },
          {
            name: 'journal_id',
            type: 'uuid',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
            default: `uuid_generate_v4()`,
          },
          {
            name: 'authorship_order',
            type: 'integer',
          },
          {
            name: 'role',
            type: 'integer',
          },
        ],
      }),
      true,
    )
    await queryRunner.createForeignKey(
      'journal_paper_author',
      new TableForeignKey({
        columnNames: ['author_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'authors',
      }),
    )
    await queryRunner.createForeignKey(
      'journal_paper_author',
      new TableForeignKey({
        columnNames: ['journal_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'journal_papers',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('journal_paper_author')
  }
}
