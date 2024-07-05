import { BaseMiddleware, Logger, getEnv, response } from "@ant/framework";
import {
  Response as ExpressResponse,
  Request as ExpressRequest,
  NextFunction,
} from "express";
import axios from "axios";
import { TbLogin } from "../database/models/TbLogin";

export class CheckTokenMiddleware extends BaseMiddleware {
  async handle(req: ExpressRequest, res: ExpressResponse, next: NextFunction) {
    Logger.debug(req.body);
    const token = req.getBasicAuth ? req.getBasicAuth() : undefined;

    // if (req.method === 'OPTIONS') {
    //     return next();
    // }

    if (!token) {
      return response().unauthorized({ message: "No posee token de autorizacion" }).send(res);
    }

    const username = token.username;
    const password = token.password;

    Logger.debug(username+' '+password);

    let userLogin = await TbLogin.find({
      where: { tx_username: username, tx_password: password },
    });

    Logger.info(userLogin);

    if(userLogin.length <= 0){
      return response().unauthorized({ message: "El usuario o la contraseña no coinciden con alguno registrado en el sistema" }).send(res);
    }

    Logger.debug(userLogin);

    next();

    //const tokenArray = token.split(".");
    //const payload = Buffer.from(tokenArray[1], "base64").toString("utf8");
    //const user = JSON.parse(payload)?.user;
    //req.user = user;

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
