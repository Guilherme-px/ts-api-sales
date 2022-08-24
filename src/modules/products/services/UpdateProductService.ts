import Product from '../typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import AppError from '../../../shared/errors/AppError';

interface iRequest {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

class UpdateProductService {
    public async execute({
        id,
        name,
        price,
        quantity,
    }: iRequest): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(id);

        if (!product) throw new AppError('Product not found');

        const productExists = await productRepository.findByName(name);

        if (productExists && name !== product.name) {
            throw new AppError('there is alredy one product with this name');
        }

        product.name = name;
        product.price = price;
        product.price = quantity;

        await productRepository.save(product);

        return product;
    }
}

export default UpdateProductService;
