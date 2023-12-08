import { PrismaService } from "src/prisma/prisma/prisma.service";
export declare class AssetsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    all(): any;
    create(data: {
        id: string;
        symbol: string;
    }): any;
}
