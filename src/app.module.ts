import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { HealthController } from './health/health.controller';
import configuration from '../config/configuration';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from './users/users.module';
import { getConnectionOptions } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { CaslModule } from './permissions/casl.module';

@Module({
  imports: [
    TerminusModule,
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: false,
        }),
    }),
    UsersModule,
    AuthModule,
    CaslModule,
  ],
  controllers: [AppController, HealthController],
  providers: [Logger],
})
export class AppModule {}
