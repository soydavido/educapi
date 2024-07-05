import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

import { getEnv, Model, now } from "@ant/framework";

@Entity("tb_login")
export class TbLogin extends Model {
  @PrimaryGeneratedColumn()
  id_login!: number;

  @Column()
  tx_username!: string;

  @Column()
  tx_password!: string;

  @Column()
  tx_role!: Date;

  @Column()
  st_login!: string;

  constructor(data?: any) {
    super();
    if (data) {
        this.id_login = data.id_login;
        this.tx_username = data.tx_username;
        this.tx_password = data.tx_password;
        this.tx_role = data.tx_role;
        this.st_login = data.st_login;
    }
  }
}
    