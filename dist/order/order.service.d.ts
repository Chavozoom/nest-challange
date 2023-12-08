import { CreateOrderDTO } from "./order.dto";
import { PrismaService } from "src/prisma/prisma/prisma.service";
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    all(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").Order & {
        Asset: {
            symbol: string;
            id: string;
        };
    })[]>;
    saveOrder(input: CreateOrderDTO): Promise<import(".prisma/client").Order>;
}
