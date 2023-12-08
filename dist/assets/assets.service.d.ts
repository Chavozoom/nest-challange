import { PrismaService } from "src/prisma/prisma/prisma.service";
export declare class AssetsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    all(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Asset[]>;
    create(data: {
        id: string;
        symbol: string;
    }): import(".prisma/client").Prisma.Prisma__AssetClient<import(".prisma/client").Asset, never>;
}
