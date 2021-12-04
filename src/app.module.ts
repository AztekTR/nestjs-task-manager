import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5002,
      username: 'postgres',
      password: 'nestjscourse',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
