import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person/entities/person.entity';


@Module({
  imports:[ 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2023022',
      database: 'apinestjsdb',
      entities: [Person],
      synchronize: true,
      logging: true,
    
    
  }),
   PersonModule

   ],
      

})
export class AppModule {}
