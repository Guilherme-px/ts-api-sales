import User from '../typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, email, password }: IRequest): Promise<User> {
        const userReopository = getCustomRepository(UsersRepository);
        const emailExists = await userReopository.findByEmail(email);

        if (emailExists) throw new AppError('Email address alredy used!');

        const passwordHash = await hash(password, 12);

        const user = userReopository.create({
            name,
            email,
            password: passwordHash,
        });

        await userReopository.save(user);

        return user;
    }
}

export default CreateUserService;
