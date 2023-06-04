import { ErrorResponse } from '../../interfaces/Error.interfaces';
import { HttpMessageResponse, HttpStatusCode } from '../constants';

export const ErrorHandler = (statusCode: HttpStatusCode, message: HttpMessageResponse | string) => {
    return {
        statusCode,
        message,
    } as ErrorResponse;
};
