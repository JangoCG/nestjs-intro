"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
let ProductService = class ProductService {
    constructor() {
        this.products = [];
    }
    insertProduct(title, desc, price) {
        const id = new Date().toString();
        const newProduct = new product_model_1.Product(id, title, desc, price);
        this.products.push(newProduct);
        return { id };
    }
    getProducts() {
        return [...this.products];
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=products.service.js.map