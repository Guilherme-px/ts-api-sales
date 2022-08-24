import User from '../typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateProductService {
    public async execute({ name, email, password }: IRequest): Promise<User> {
        const userReopository = getCustomRepository(UsersRepository);
        const emailExists = await userReopository.findByEmail(email);

        if (emailExists) throw new AppError('Email address alredy used!');

        const user = userReopository.create({
            name,
            email,
            password,
        });

        await userReopository.save(user);

        return user;
    }
}

export default CreateProductService;
