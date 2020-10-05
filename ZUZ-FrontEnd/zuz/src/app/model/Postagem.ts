import { TemplateAst } from '@angular/compiler';
import { Tema } from './Tema';
import { User } from './User';

export class Postagem{
    public id: number;
    public descricao: string;
    public dataPostagem: Date;
    public usuario: User; //USER OU USUARIO?
    public curtida: number;
    public tema: Tema;
}