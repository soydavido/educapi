import {
  IsNotEmpty,
  IsEmail,
  IsDateString,
  IsNumber,
  IsString,
  isString,
} from "class-validator";
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from "class-validator";


export class Usuario {
  @IsNotEmpty()
  @IsString()
  id_usuario!: number;

  @IsNotEmpty()
  @IsString()
  tx_nombre!: string;

  @IsNotEmpty()
  @IsString()
  tx_apellido!: string;

  @IsNotEmpty()
  @IsDateString()
  dt_fecha_nacimiento!: Date;

  @IsNotEmpty()
  @IsString()
  st_usuario!: string;

  @IsNotEmpty()
  @IsString()
  tx_src_foto!: string;

  @IsNotEmpty()
  @IsString()
  tx_alt_src_foto!: string;

  @IsNotEmpty()
  @IsEmail()
  tx_email!: string;

  @IsNotEmpty()
  @IsNumber()
  id_documento!: number;

  constructor(data: any) {

    this.id_usuario = data.id_usuario;
    this.tx_nombre = data.tx_nombre;
    this.tx_apellido = data.tx_apellido;
    this.dt_fecha_nacimiento = data.dt_fecha_nacimiento;
    this.st_usuario = data.st_usuario;
    this.tx_src_foto = data.tx_src_foto;
    this.tx_alt_src_foto = data.tx_alt_src_foto;
    this.tx_email = data.tx_email;
    this.id_documento = data.id_documento;
  }
}
