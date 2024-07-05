import {
    BaseRoute,
    Logger,
    Method,
    response,
    Response
} from "@ant/framework";
import {
    getEnv,
    Lang
} from "@ant/framework";
import { TbUsuario } from "../../database/models/TbUsuario";

export class GetAllUsers extends BaseRoute {
    url = "/api/v1/getAllUsers";

    method: Method = "get";

    async handle(): Promise<Response> {

        return new Promise(async (resolve, reject) => {
    
            let pendientes: any = [];

            try {
                pendientes = await TbUsuario.find();
                Logger.info(pendientes);
            } catch (error) {
                Logger.error(error);
                Logger.error("Error al consultar la base de datos");
            }

            return resolve(response({
                message: "Usuarios consultados correctamente",
                usuarios: pendientes
            },200));
        });

        
    } 
}
