import { BaseMiddleware, response } from "@ant/framework";
import { Request as ExpressRequest, Response as ExpressResponse, NextFunction } from "express";


export class NoEmptyBody extends BaseMiddleware {
    handle(req: ExpressRequest, res: ExpressResponse, next: NextFunction): void {
        if (Object.keys(req.body).length != 0) {
            return next();
        }

        response().unprocessable({ message: "No permitido" }).send(res);
    }
}
