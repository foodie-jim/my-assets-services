import { Request, Response } from "express";

const status = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNSUPPORTED_ACTION: 405,
    VALIDATION_FAILED: 422,
    SERVER_ERROR: 500,
    CREATED: 201,
};

const Api = {
    ok(_req: Request, res: Response, body: any) {

        res.status(status.OK).json(body || null);        
    },
    error(_req: Request, res: Response) {

        res.status(status.SERVER_ERROR);
    }
}

export default Api;