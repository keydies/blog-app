import { Request, Response } from 'express';
import type { ErrorResponse } from '../interfaces/Error.interfaces';
import { UserBody } from '../interfaces/User.interfaces';
import AuthService from '../services/Auth.service';
import { HttpStatusCode } from '../utils/constants';
import { ErrorHandler } from '../utils/handlers/errorHandler';

export type LoginBody = Pick<UserBody, 'email' | 'password' | '_id'>;

class AuthController {
    async login(req: Request, res: Response) {
        try {
            const loginData: LoginBody = req.body;

            const candidate: LoginBody | ErrorResponse = await AuthService.login({
                email: loginData.email,
                password: loginData.password,
            });

            return res.status(HttpStatusCode.OK).json(candidate);
        } catch (error) {
            let errorData;

            if (error instanceof Error) {
                errorData = ErrorHandler(HttpStatusCode.INTERNAL_SERVER, error.message);
            }
            return res.status(HttpStatusCode.INTERNAL_SERVER).json(errorData);
        }
    }

    async signup(req: Request, res: Response) {
        try {
            const authData: UserBody = req.body;

            const newUser: UserBody | ErrorResponse = await AuthService.signup(authData);

            return res.status(HttpStatusCode.OK).json(newUser);
        } catch (error) {
            let errorData;

            if (error instanceof Error) {
                errorData = ErrorHandler(HttpStatusCode.INTERNAL_SERVER, error.message);
            }
            return res.status(HttpStatusCode.INTERNAL_SERVER).json(errorData);
        }
    }
}

export default new AuthController();
