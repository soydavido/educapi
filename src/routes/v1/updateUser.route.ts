import {
    BaseRoute,
    Logger,
    Method,
    response,
    Response,
    Request,
} from "@ant/framework";
import { getEnv, Lang } from "@ant/framework";
import { Usuario } from "../../models/Usuario.model";
import { validate } from "class-validator";
import { TbUsuario } from "../../database/models/TbUsuario";

export class UpdateUser extends BaseRoute {
    url = "/api/v1/updateUser";

    method: Method = "put";

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
                    return resolve(response(errorResponse, 422));
                }
                else {
                    Logger.info("Usuario validado correctamente");
                }
                Logger.info(nuevoUsuario);

                let usuarioBD = await TbUsuario.find({ where: { id_usuario: nuevoUsuario.id_usuario } });
                let userUpdate = usuarioBD[0];

                userUpdate.tx_nombre = nuevoUsuario.tx_nombre;
                userUpdate.tx_apellido = nuevoUsuario.tx_apellido;
                userUpdate.dt_fecha_nacimiento = nuevoUsuario.dt_fecha_nacimiento;
                userUpdate.st_usuario = nuevoUsuario.st_usuario;
                userUpdate.tx_src_foto = nuevoUsuario.tx_src_foto;
                userUpdate.tx_alt_src_foto = nuevoUsuario.tx_alt_src_foto;
                userUpdate.tx_email = nuevoUsuario.tx_email;
                userUpdate.id_documento = nuevoUsuario.id_documento;

                userUpdate.save();

            } catch (error) {
                let errorResponse = { message: 'Error tecnico, el servidor no pudo procesar su solicitud', error: error };
                return resolve(response(errorResponse, 500));
            }

            return resolve(response({ message: 'Usuario actualizado correctamente' }, 200));
            
        });
    }
}
