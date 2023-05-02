import UsuarioAbstract from '../abstract-classes/UsuarioAbstract';

export default class UsuarioModel extends UsuarioAbstract{ 
    private constructor(){
        super();
    }

    public static criaUsuarioModel(): UsuarioModel{
        return new UsuarioModel();
    }
}