import { BaseMiddleware, Logger, getEnv, response } from "@ant/framework";
import {
  Response as ExpressResponse,
  Request as ExpressRequest,
  NextFunction,
} from "express";
import axios from "axios";

export class CheckTokenMiddleware extends BaseMiddleware {
  async handle(req: ExpressRequest, res: ExpressResponse, next: NextFunction) {
    const token = req.getBearer ? req.getBearer() : undefined;

    Logger.info("Middleware");

    // if (req.method === 'OPTIONS') {
    //     return next();
    // }

    if (!token) {
      return response().unauthorized({ message: "No autorizado" }).send(res);
    }

    const tokenArray = token.split(".");
    const payload = Buffer.from(tokenArray[1], "base64").toString("utf8");
    const user = JSON.parse(payload)?.user;
    req.user = user;

    /* await axios
      .get(`${getEnv("URL_APISEG")}/api/v3/auth/user/sesion/check`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resultado) => {
        if (resultado.status == 200) {
          next();
        }
      })
      .catch((err) => {
        return response()
          .unauthorized({ message: "No autorizado", error: err })
          .send(res);
      }); */
  }
}
