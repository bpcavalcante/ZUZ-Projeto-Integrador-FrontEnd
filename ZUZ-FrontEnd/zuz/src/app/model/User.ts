import { Consulta } from './Consulta';

import { Postagem } from './Postagem';

export class User {
    public id: number;
    public nome: string;
    public usuario: string;
    public cpf: string;
    public senha: string;
    public foto: string;
    public consulta: Consulta[] 
    public postagem: Postagem[] 
}