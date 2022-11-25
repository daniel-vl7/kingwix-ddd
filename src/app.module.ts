import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    url: 'mysql://root:root@localhost:3306/kingwix-ddd-scratch',
    migrationsRun: true,
    logging: true,
    timezone: '+00:00',
    bigNumberStrings: false,
    entities: [
      'dist/**/infrastructure/persistence/entities/*{.ts,.js}'
    ],
    subscribers: [],
    migrations: [
      'dist/shared/infrastructure/persistence/migrations/*{.ts,.js}'
    ],
    migrationsTableName: "migrations"
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
