import { Request, Response } from 'express';
import { ErrorResponse } from '../interfaces/Error.interfaces';
import { UserBody } from '../interfaces/User.interfaces';
import UserService from '../services/User.service';
import { HttpStatusCode } from '../utils/constants';
import { ErrorHandler } from '../utils/handlers/errorHandler';

class UserContoller {
    async updateData(req: Request, res: Response) {
        try {
            const userData: UserBody = req.body;

            const updatedUser: UserBody | ErrorResponse = await UserService.updateData(userData);

            return res.status(HttpStatusCode.OK).json(updatedUser);
        } catch (error) {
            let errorData;

            if (error instanceof Error) {
                errorData = ErrorHandler(HttpStatusCode.INTERNAL_SERVER, error.message);
            }
            return res.status(HttpStatusCode.INTERNAL_SERVER).json(errorData);
        }
    }
    async updatePassword(req: Request, res: Response) {
        try {
            const userData = req.body;

            const updatedUser: UserBody | ErrorResponse = await UserService.updatePassword(userData);

            return res.status(HttpStatusCode.OK).json(updatedUser);
        } catch (error) {
            let errorData;

            if (error instanceof Error) {
                errorData = ErrorHandler(HttpStatusCode.INTERNAL_SERVER, error.message);
            }
            return res.status(HttpStatusCode.INTERNAL_SERVER).json(errorData);
        }
    }
}

export default new UserContoller();
