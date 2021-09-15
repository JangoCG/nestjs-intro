import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductService) { }

    @Post()
    addProduct(
        @Body("title") prodTitle: string,
        @Body("description") prodDesc: string,
        @Body("price") prodPrice: number
    ): any {
        return this.productsService.insertProduct(prodTitle, prodDesc, prodPrice)
    }

    @Get()
    getAllProducts() {
        return this.productsService.getProducts();

    }
}