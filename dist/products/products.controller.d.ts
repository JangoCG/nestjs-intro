import { ProductService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): any;
    getAllProducts(): import("./product.model").Product[];
}
