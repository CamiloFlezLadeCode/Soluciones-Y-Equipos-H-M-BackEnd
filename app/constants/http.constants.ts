export const RESPONSE_CODE = {
    OK: 200,
    CREATED: 201,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    INTERNAL_SERVER_ERROR: 500,
    BAD_REQUEST: 400,
    CONFLICT: 409,
}

export const RESPONSE_MESSAGE = {
    OK: "OK",
    CREATED: "Created",
    NOT_FOUND: "Not Found",
    UNAUTHORIZED: "Unauthorized",
    FORBIDDEN: "Forbidden",
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    BAD_REQUEST: "Bad Request",
    CONFLICT: "Conflict",
}

export enum RESPONSE_STATUS {
    SUCCESS = "Success",
    ERROR = "Error",
}