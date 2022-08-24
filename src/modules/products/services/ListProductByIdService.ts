import Product from '../typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import AppError from '../../../shared/errors/AppError';

interface iRequest {
    id: string;
}

class ListProductByIdService {
    public async execute({ id }: iRequest): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(id);

        if (!product) throw new AppError('Product not found');

        return product;
    }
}

export default ListProductByIdService;
