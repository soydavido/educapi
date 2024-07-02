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

export class DeleteUser extends BaseRoute {
    url = "/api/v1/delete";

    method: Method = "delete";

    async handle(req: Request): Promise<Response> {
        
        let id = req.query.id;

        return new Promise(async (resolve, reject) => {
            
            try {
                let usuarioBD = await TbUsuario.find({ where: { id_usuario: Number(id) } });
                Logger.info(usuarioBD); 
                await usuarioBD[0].remove();   
            } catch (error) {
                let errorResponse = { message: 'No se encontro el usuario a eliminar' };
                return resolve(response(errorResponse, 404));
            }

            return resolve(response({ message: 'Usuario eliminado correctamente' }, 200));
            
        });
    }
}
