import { OrdersService } from "./order.service";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    all(): any;
    saveOrder(body: any): Promise<any>;
}
