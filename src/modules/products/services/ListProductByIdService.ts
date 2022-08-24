import Product from '../typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import AppError from '../../../shared/errors/AppError';

interface iRequest {
    id: string;
}

class ShowProductService {
    public async execute({ id }: iRequest): Promise<Product | undefined> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = productRepository.findOne(id);

        if (!product) throw new AppError('Product not found');

        return product;
    }
}

export default ShowProductService;
