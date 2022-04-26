import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class journals1648065315900 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'journals',
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
            name: 'issn',
            type: 'varchar',
          },
          {
            name: 'e_issn',
            type: 'varchar',
          },
          {
            name: 'address',
            type: 'varchar',
          },
        ],
      }),
      true,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('journals')
  }
}
