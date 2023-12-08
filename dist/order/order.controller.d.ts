import { OrdersService } from "./order.service";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    all(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Order & {
        Asset: {
            symbol: string;
            id: string;
        };
    })[]>;
    saveOrder(body: any): Promise<import(".prisma/client").Order>;
}
