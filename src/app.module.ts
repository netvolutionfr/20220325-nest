import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsController } from './restaurants/restaurants.controller';
import { RestaurantSchema, Restaurant } from './restaurants/restaurants.schema';
import { RestaurantService } from './restaurants/restaurants.service';
import { ConfigModule } from '@nestjs/config';

// TODO: configure mongoose with config service module
// https://javascript.plainenglish.io/build-a-server-side-app-with-typescript-nestjs-and-mongodb-d29d26ac1ab3

const mongourl = process.env.MONGODB_URI || 'mongodb://localhost:27017/restaurants';
@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRoot(mongourl),
    MongooseModule.forFeature([{name: Restaurant.name, schema: RestaurantSchema}])
],
  controllers: [AppController, RestaurantsController],
  providers: [AppService, RestaurantService],
})
export class AppModule {}
