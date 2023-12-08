import { AssetsService } from "./assets.service";
export declare class AssetsController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
    all(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Asset[]>;
    create(body: {
        id: string;
        symbol: string;
    }): import(".prisma/client").Prisma.Prisma__AssetClient<import(".prisma/client").Asset, never>;
}
