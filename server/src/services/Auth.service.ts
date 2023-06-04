import { LoginBody } from '../controllers/Auth.controller';
import { ErrorResponse } from '../interfaces/Error.interfaces';
import { UserBody } from '../interfaces/User.interfaces';
import UserModel from '../models/User.model';
import { HttpMessageResponse, HttpStatusCode } from '../utils/constants';
import { ErrorHandler } from '../utils/handlers/errorHandler';
import { checkEmptyFields } from '../utils/validator/auth.validator';

class AuthService {
    async login(loginData: LoginBody): Promise<LoginBody | ErrorResponse> {
        const { email, password } = loginData;
        const candidate: LoginBody | null = await UserModel.findOne({ email });

        if (!candidate) {
            return ErrorHandler(HttpStatusCode.BAD_REQUEST, HttpMessageResponse.USER_IS_NOT_FOUND);
        } else {
            const isValidPassword: boolean = password === candidate.password;

            if (isValidPassword) {
                return candidate;
            } else {
                return ErrorHandler(HttpStatusCode.FORBIDDEN, HttpMessageResponse.INCORRECT_DATA);
            }
        }
    }

    async signup(authData: UserBody): Promise<UserBody | ErrorResponse> {
        const { email, password } = authData;

        checkEmptyFields(authData);

        const candidate: LoginBody | null = await UserModel.findOne({ email });

        if (candidate) {
            return ErrorHandler(HttpStatusCode.BAD_REQUEST, HttpMessageResponse.USER_IS_ALREADY_EXIST);
        } else {
            const newUser = await UserModel.create({ ...authData, password });

            return newUser as unknown as UserBody;
        }
    }
}

export default new AuthService();
