import { Tema } from './Tema';
import { User } from './User';

export class Postagem{
    public id: number;
    public descricao: string;
    public dataPostagem: Date;
    public usuario: User; 
    public tema: Tema;
    public foto: string;
    public video: string;
    public artigo: string;
    	
}