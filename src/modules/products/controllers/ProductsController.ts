import { Response, Request } from 'express';
import ListProductService from '../services/ListProductService';
import ListProductByIdService from '../services/ListProductByIdService';
import CreateProductService from '../services/CreateProductService';
import UpdateProductService from '../services/UpdateProductService';
import DeleteProductService from '../services/DeleteProductService';

class ProductsController {
    public async get(req: Request, res: Response): Promise<Response> {
        const listProducts = new ListProductService();

        const products = await listProducts.execute();

        return res.json(products);
    }

    public async getByid(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const listProduct = new ListProductByIdService();

        const product = await listProduct.execute({ id });

        return res.json({ product });
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { name, price, quantity } = req.body;

        const createProduct = new CreateProductService();

        const product = await createProduct.execute({
            name,
            price,
            quantity,
        });

        return res.json(product);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { name, price, quantity } = req.body;
        const { id } = req.params;

        const updateProduct = new UpdateProductService();

        const product = await updateProduct.execute({
            id,
            name,
            price,
            quantity,
        });

        return res.json(product);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const deleteproduct = new DeleteProductService();

        await deleteproduct.execute({ id });

        return res.json([]);
    }
}

export default ProductsController;
