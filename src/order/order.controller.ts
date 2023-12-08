import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from "./order.service";

@Controller('/api/orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Get()
    all() {
        return this.ordersService.all();
    }

    @Post()
    saveOrder(
        @Body() body,
    ) {
        return this.ordersService.saveOrder({
            ...body,
        });
    }
}