import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RestaurantDocument, Restaurant } from "./restaurants.schema";

@Injectable()
export class RestaurantService {
    constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<RestaurantDocument>) {}

    async getAllRestaurants(): Promise<RestaurantDocument[]> {
        return await this.restaurantModel.find({
            "borough": "Brooklyn",
            "cuisine": "Italian",
            "address.street": "5 Avenue"
        }).exec();
    }

    async getRestaurant(id: string): Promise<RestaurantDocument> {
        return await this.restaurantModel.findById(id).exec();
    }

    async createRestaurant(restaurant: Restaurant): Promise<RestaurantDocument> {
        return await this.restaurantModel.create(restaurant);
    }
}