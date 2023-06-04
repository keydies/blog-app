import { ErrorResponse } from '../interfaces/Error.interfaces';
import { UserBody } from '../interfaces/User.interfaces';
import UserModel from '../models/User.model';
import { HttpStatusCode, HttpMessageResponse } from '../utils/constants';
import { ErrorHandler } from '../utils/handlers/errorHandler';

class UserService {
    async updateData(userData: UserBody): Promise<UserBody | ErrorResponse> {
        const { _id: userId } = userData;
        const candidate = await UserModel.findById(userId);

        if (candidate) {
            const updatedUser = await UserModel.findByIdAndUpdate(userId, userData, { new: true });

            return updatedUser as unknown as UserBody;
        } else {
            return ErrorHandler(HttpStatusCode.BAD_REQUEST, HttpMessageResponse.USER_IS_NOT_FOUND);
        }
    }
    async updatePassword(userData: UserBody): Promise<UserBody | ErrorResponse> {
        const { email, password } = userData;
        const user = await UserModel.findOne({ email });

        if (user) {
            user.password = password;

            user.save();

            return user as unknown as UserBody;
        } else {
            return ErrorHandler(HttpStatusCode.BAD_REQUEST, HttpMessageResponse.USER_IS_NOT_FOUND);
        }
    }
}

export default new UserService();
