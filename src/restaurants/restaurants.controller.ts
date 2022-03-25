import { Controller, Get, Res } from '@nestjs/common';
import { RestaurantService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantService) {}
    @Get()
    async getAllRestaurants(@Res() res) {
        const restaurants = await this.restaurantsService.getAllRestaurants();
        return res.status(200).json({'restaurants': restaurants});
    }
}
