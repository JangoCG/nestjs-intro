import { Product } from './product.model';
export declare class ProductService {
    products: Product[];
    insertProduct(title: string, desc: string, price: number): {
        id: string;
    };
    getProducts(): Product[];
}
