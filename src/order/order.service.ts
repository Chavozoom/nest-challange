import { Injectable } from '@nestjs/common';
import { CreateOrderDTO } from "./order.dto";
import { PrismaService } from "src/prisma/prisma/prisma.service";

@Injectable()
export class OrdersService {
    constructor(
        private prismaService: PrismaService,
    ) { }

    all() {
        return this.prismaService.order.findMany({
            include: {
                Asset: {
                    select: {
                        id: true,
                        symbol: true,
                    },
                },
            },
        });
    }

    async saveOrder(input: CreateOrderDTO) {
        //this.prismaService.$use();

        return await this.prismaService.order.create({
            data: {
                asset_id: input.asset_id,
                price: input.price,
                status: "PENDING"
            },
        });
    }
};