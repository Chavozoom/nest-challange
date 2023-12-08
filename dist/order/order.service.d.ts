import { CreateOrderDTO } from "./order.dto";
import { PrismaService } from "src/prisma/prisma/prisma.service";
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    all(): any;
    saveOrder(input: CreateOrderDTO): Promise<any>;
}
