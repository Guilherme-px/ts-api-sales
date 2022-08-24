import Product from '../typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import AppError from '../../../shared/errors/AppError';

interface iRequest {
    id: string;
}

class DeleteProductService {
    public async execute({ id }: iRequest): Promise<void> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(id);

        if (!product) throw new AppError('Product not found');

        await productRepository.remove(product);
    }
}

export default DeleteProductService;
