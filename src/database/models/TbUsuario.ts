import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

import { getEnv, Model, now } from "@ant/framework";

@Entity("tb_usuario")
export class TbUsuario extends Model {
  @PrimaryGeneratedColumn()
  id_usuario!: number;

  @Column()
  tx_nombre!: string;

  @Column()
  tx_apellido!: string;

  @Column()
  dt_fecha_nacimiento!: Date;

  @Column()
  st_usuario!: string;

  @Column()
  tx_src_foto!: string;

  @Column()
  tx_alt_src_foto!: string;

  @Column()
  tx_email!: string;

  @Column("numeric")
  id_documento!: number;

  constructor(data?: any) {
    super();
    if (data) {
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
}
    