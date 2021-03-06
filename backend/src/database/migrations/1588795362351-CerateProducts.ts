import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CerateProducts1588795362351 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'brands',
        columns: [
          {
            name: 'id',
            type: 'int',
            generationStrategy: 'increment',
            isPrimary: true,
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'category_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'provider_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'reference',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'min_inventory',
            type: 'int',
          },
          {
            name: 'max_inventory',
            type: 'int',
          },
          {
            name: 'current_inventory',
            type: 'int',
          },
          {
            name: 'weight',
            type: 'numeric',
          },
          {
            name: 'brand_id',
            type: 'int',
          },
          {
            name: 'markup',
            type: 'numeric',
          },
          {
            name: 'cost',
            type: 'numeric',
          },
          {
            name: 'wholesale',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'retail',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'suggested_price',
            type: 'numeric',
          },
          {
            name: 'discount',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'commission',
            type: 'numeric',
          },
          {
            name: 'note',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'product_image',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'is_active',
            type: 'boolean',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        name: 'products_categories',
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        name: 'products_providers',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'providers',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        name: 'products_brands',
        columnNames: ['brand_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'brands',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('products', 'products_categories');
    await queryRunner.dropForeignKey('products', 'products_providers');
    await queryRunner.dropForeignKey('products', 'products_brands');
    await queryRunner.dropTable('brands');
    await queryRunner.dropTable('products');
  }
}
