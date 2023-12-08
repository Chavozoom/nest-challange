import { AssetsService } from "./assets.service";
export declare class AssetsController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
    all(): any;
    create(body: {
        id: string;
        symbol: string;
    }): any;
}
