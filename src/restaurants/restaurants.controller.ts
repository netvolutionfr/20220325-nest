import { Controller, Get, Res, Param, Body, Post } from '@nestjs/common';
import { RestaurantService } from './restaurants.service';
import { Restaurant } from './restaurants.schema';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantService) {}
    @Get()
    async getAllRestaurants(@Res() res) {
        const restaurants = await this.restaurantsService.getAllRestaurants();
        return res.status(200).json({'restaurants': restaurants});
    }

    @Get('/:id')
    async getRestaurant(@Res() res, @Param('id') id) {
        const restaurant = await this.restaurantsService.getRestaurant(id);
        return res.status(200).json({'restaurant': restaurant});
    }

    @Get('/:id/grades')
    async getRestaurantGrades(@Res() res, @Param('id') id) {    
        const restaurant = await this.restaurantsService.getRestaurant(id);
        return res.status(200).json({'grades': restaurant.grades});
    }

    @Post()
    async createRestaurant(@Res() res, @Body() restaurant: Restaurant) {
        const createdRestaurant = await this.restaurantsService.createRestaurant(restaurant);
        return res.status(201).json({'restaurant': createdRestaurant});
    }
}
