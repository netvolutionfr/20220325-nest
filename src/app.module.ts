import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsController } from './restaurants/restaurants.controller';
import { RestaurantSchema, Restaurant } from './restaurants/restaurants.schema';
import { RestaurantService } from './restaurants/restaurants.service';

const mongourl = 'mongodb+srv://testrestaurants:Qjq2qOV8pk3HNpGH@cluster0.zjgwy.mongodb.net/new_york';

@Module({
  imports: [MongooseModule.forRoot(mongourl),
    MongooseModule.forFeature([{name: Restaurant.name, schema: RestaurantSchema}])
],
  controllers: [AppController, RestaurantsController],
  providers: [AppService, RestaurantService],
})
export class AppModule {}
