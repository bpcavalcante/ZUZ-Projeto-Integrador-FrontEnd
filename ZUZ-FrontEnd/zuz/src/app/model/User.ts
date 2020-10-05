import { Consulta } from './Consulta';
import { Endereco } from './Endereco';
import { Postagem } from './Postagem';

export class User {
    public id: number;
    public nome: string;
    public tipoUsuario: string;
    public usuario: string;
    public cpf: string;
    public data: Date;
    public senha: string;
    public crm: string;
    public consulta: Consulta[] 
    public endereco: Endereco;
    public postagem: Postagem[] 
}