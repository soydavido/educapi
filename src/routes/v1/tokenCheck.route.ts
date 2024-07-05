import {
    BaseRoute,
    Logger,
    Method,
    response,
    Response,
    Request,
    MiddlewareContract,
  } from "@ant/framework";
  import { getEnv, Lang } from "@ant/framework";
  import { Usuario } from "../../models/Usuario.model";
  import { validate } from "class-validator";
  import { TbUsuario } from "../../database/models/TbUsuario";
import { CheckTokenMiddleware } from "../../middlewares/check_token.middleware";
  
  export class TokenCheck extends BaseRoute {
    url = "/api/v1/tokenCheck";
  
    method: Method = "get";
  
    middlewares: (new () => MiddlewareContract)[] = [
      CheckTokenMiddleware,
    ];
    
    async handle(req: Request): Promise<Response> {
      return new Promise(async (resolve, reject) => {
      
        const token = req.getBasicAuth ? req.getBasicAuth() : undefined;
        const username = token ? token?.username : '';
        Logger.debug(username);

       return resolve(response({ message: 'Validado correctamente' }, 200));

      });
    }
  }
  