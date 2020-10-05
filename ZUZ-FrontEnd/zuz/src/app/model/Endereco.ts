import { User } from './User'

export class Endereco{
    public id: number;
    public cep: number;
    public bairro: string;
    public rua: string;
    public numero: number;
    public complemento: string;
    public usuario: User;
}