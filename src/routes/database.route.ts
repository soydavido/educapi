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

export class DatabaseRoute extends BaseRoute {
    url = "/select";

    method: Method = "get";

    async handle(): Promise<Response> {

        return new Promise(async (resolve, reject) => {
    
            return response({
                status: Lang.__("active"),
                message:  Lang.__("Welcome to the [{{name}}] microservice.", {
                    name: getEnv("APP_NAME", "Ant"),
                }),
            });
        });

        
    } 
}
