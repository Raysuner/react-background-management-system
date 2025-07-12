import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './resource/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './resource/user/entities/user.entity';
import { RoleModule } from './resource/role/role.module';
import { PermissionModule } from './resource/permission/permission.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'react_admin',
      entities: [User],
      synchronize: true,
    }),
    RoleModule,
    PermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
