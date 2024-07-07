import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/nestjs101'),
        ProductModule,
        AuthModule,
        UserModule
    ],
})

export class AppModule { }
