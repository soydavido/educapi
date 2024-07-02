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

export class UpdateUser extends BaseRoute {
    url = "/api/v1/delete";

    method: Method = "delete";

    async handle(req: Request): Promise<Response> {
        
        let id = req.params.id;

        return new Promise(async (resolve, reject) => {
            
            let usuarioBD = await TbUsuario.find({ where: { id_usuario: Number(id) } });
            Logger.info(usuarioBD);;

            return resolve(response({ message: 'Usuario actualizado correctamente' }, 200));
            
        });
    }
}
