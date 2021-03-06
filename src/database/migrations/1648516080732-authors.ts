import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class authors1648065315900 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    await queryRunner.createTable(
      new Table({
        name: 'authors',
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
            name: 'orcid',
            type: 'varchar',
            isNullable: true,
            isUnique: true
          },
          {
            name: 'lattes_id',
            type: 'varchar',
            isNullable: false,
            isUnique: true
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'institution',
            type: 'varchar',
          },
        ],
      }),
      true,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('authors')
  }
}
