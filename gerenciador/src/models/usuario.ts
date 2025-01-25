import { Papel } from "./papeis";

export interface Usuario {
    id:                     string;
    nome:                   string;
    email:                  string;
    senha:                  string;
    papel:                  Papel;
    dataCadastro:           Date;
    dataUltimaAlteracao:    Date;
    status:                 boolean;
}