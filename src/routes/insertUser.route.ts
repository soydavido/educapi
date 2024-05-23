import {
    BaseRoute,
    Logger,
    Method,
    response,
    Response,
    Request
} from "@ant/framework";
import {
    getEnv,
    Lang
} from "@ant/framework";
import { Usuario } from "../models/Usuario.model";
import { validate } from 'class-validator';

export class InsertUser extends BaseRoute {
    url = "/api/v1/insertUser";

    method: Method = "post";

    async handle(req: Request): Promise<Response> {

        return new Promise(async (resolve, reject) => {
            try {
              let nuevoUsuario: Usuario = new Usuario(req.body);
              const errors = await validate(nuevoUsuario);
              if (errors.length > 0) {
                Logger.error("Error al validar el usuario");
                Logger.error(errors);
                return reject(response().json(errors));
              }
              Logger.info(nuevoUsuario);
            } catch (error) {
              Logger.error("Error al crear el usuario");
              Logger.error(error);
              return reject(response().json(error));
            }
      
            return resolve(response().json({}));
          });

        
    } 
}
