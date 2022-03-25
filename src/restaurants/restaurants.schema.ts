import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RestaurantDocument = Restaurant & Document;

interface Grade {
    date: Date;
    grade: string;
    score: number;
}

@Schema()
export class Restaurant {
    @Prop()
    address: string;

    @Prop()
    borough: string;

    @Prop()
    cuisine: string;

    @Prop()
    grades: Grade[];

    @Prop()
    name: string;

    @Prop()
    restaurant_id: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
