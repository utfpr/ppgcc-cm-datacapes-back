import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class conference_paper_author1648066413298 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'conference_paper_author',
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
            name: 'conference_id',
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
      'conference_paper_author',
      new TableForeignKey({
        columnNames: ['author_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'authors',
      }),
    )
    await queryRunner.createForeignKey(
      'conference_paper_author',
      new TableForeignKey({
        columnNames: ['conference_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'conference_papers',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('conference_paper_author')
  }
}
