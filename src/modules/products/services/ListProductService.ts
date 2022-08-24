import Product from '../typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

class ListProductService {
    public async execute(): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);

        const products = productRepository.find();

        return products;
    }
}

export default ListProductService;
