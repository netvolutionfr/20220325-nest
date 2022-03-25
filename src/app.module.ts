import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsController } from './restaurants/restaurants.controller';
import { RestaurantSchema, Restaurant } from './restaurants/restaurants.schema';
import { RestaurantService } from './restaurants/restaurants.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/new_york'),
    MongooseModule.forFeature([{name: Restaurant.name, schema: RestaurantSchema}])
],
  controllers: [AppController, RestaurantsController],
  providers: [AppService, RestaurantService],
})
export class AppModule {}
