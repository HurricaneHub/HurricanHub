import { Request, Response } from 'express';
import UserModel from '../models/userModel';

class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const user = await UserModel.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    }

    async getUser(req: Request, res: Response) {
        try {
            const user = await UserModel.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user', error });
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await UserModel.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving users', error });
        }
    }
}

export default new UserController();