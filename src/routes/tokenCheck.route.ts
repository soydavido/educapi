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
  
  export class TokenCheck extends BaseRoute {
    url = "/api/v1/tokenCheck";
  
    method: Method = "get";
  
    async handle(req: Request): Promise<Response> {
      return new Promise(async (resolve, reject) => {
        
        let headers = req.headers;
        
        //Token asignment
        let token = req.headers.authorization;

        //Token exists
        if (token == null)
          return resolve(response({ message: 'No se ha enviado el token' }, 400));

        //Token type validation
        if(!token.includes('Basic '))
            return resolve(response({ message: 'No se ha enviado el tipo de token correcto' }, 406));


        //Token validation try catch
        try {
            
            //Decoding Basic Token
            let decodeCredentials = atob(token.split(' ')[1]);
            
            //Username and Password Decoded extraction
            let decryptedUser = decodeCredentials.split(':')[0];
            let decryptedPassword = decodeCredentials.split(':')[1];

            //Username validation
            if(decryptedUser != 'educapi')
                return resolve(response({ message: 'Usuario incorrecto' }, 401));

            //Password validation
            if(decryptedPassword != 'educapi')
                return resolve(response({ message: 'Contraseña incorrecta' }, 401));

        } catch (error) {
            Logger.error(error);
            return resolve(response({ message: 'Error al decodificar el token de acceso' }, 500));
        }

        Logger.trace(headers);

       return resolve(response({ message: 'Validado correctamente' }, 200));

      });
    }
  }
  