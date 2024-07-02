import {
  BaseRoute,
  Logger,
  Method,
  response,
  Response,
  Request,
} from "@ant/framework";
import { getEnv, Lang } from "@ant/framework";
import { Usuario } from "../models/Usuario.model";
import { validate } from "class-validator";
import { TbUsuario } from "../database/models/TbUsuario";

export class InsertUser extends BaseRoute {
  url = "/api/v1/insertUser";

  method: Method = "post";

  async handle(req: Request): Promise<Response> {
    return new Promise(async (resolve, reject) => {
      let nuevoUsuario: Usuario;
      try {
        let nuevoUsuario: Usuario = new Usuario(req.body);
        const errors = await validate(nuevoUsuario);
        let erroresResponse = [];
        if (errors.length > 0) {
          for (let error of errors) {
            let errorBody = { columna: error.property, errores: Array<string>() };
            Logger.error(error.property);
            let errorConstraints = error.constraints;
            for (const key in errorConstraints) {
              errorBody.errores.push(errorConstraints[key]);
            }
            erroresResponse.push(errorBody);
          }

          let errorResponse = { message: 'Error validando los campos', primerError: erroresResponse[0].errores[0], errores: erroresResponse };

          Logger.error("Error al validar el usuario");
          //Logger.error(errors);
          return resolve(response(errorResponse, 400));
        }
        else {
          Logger.info("Usuario validado correctamente");
        }
        Logger.info(nuevoUsuario);
        let usuarioBd = new TbUsuario(nuevoUsuario)
        usuarioBd.save();
      } catch (error) {
        let errorResponse = { message: 'Error tecnico, el servidor no pudo procesar su solicitud', primerError: 'Error guardando en BD', errores: error };
        return resolve(response(errorResponse, 500));
      }

      return resolve(response({ message: 'Usuario insertado correctamente' }, 200));
    });
  }
}
