export const enum HttpMessageResponse {
    USER_IS_ALREADY_EXIST = 'User is already exist',
    INCORRECT_DATA = 'Incorrect data',
    USER_IS_NOT_FOUND = 'User is not found',
    BAD_REQUEST = 'Bad request',
}

export const enum HttpStatusCode {
    OK = 200,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
    FORBIDDEN = 403,
}
