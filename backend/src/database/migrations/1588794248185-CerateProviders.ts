import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CerateProviders1588794248185
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: 'providers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'fantasy_name',
            type: 'varchar',
          },
          {
            name: 'cpf_cnpj',
            type: 'varchar',
          },
          {
            name: 'company_name',
            type: 'varchar',
          },
          {
            name: 'category_id',
            type: 'int',
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'providers',
      new TableForeignKey({
        name: 'providers_categories',
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('providers', 'providers_categories');
    await queryRunner.dropTable('categories');
    await queryRunner.dropTable('providers');
  }
}
