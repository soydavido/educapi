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
import { TbUsuario } from "../models/TbUsuario";

export class DatabaseRoute extends BaseRoute {
    url = "/select";

    method: Method = "get";

    async handle(): Promise<Response> {

        return new Promise(async (resolve, reject) => {
    
            try {
                let pendientes = await TbUsuario.find();
                Logger.info(pendientes);
            } catch (error) {
                Logger.error(error);
                Logger.error("Error al consultar la base de datos");
            }

            return resolve(response({
                status: Lang.__("active"),
                message:  Lang.__("Welcome to the [{{name}}] microservice.", {
                    name: getEnv("APP_NAME", "Ant"),
                }),
            }));
        });

        
    } 
}
