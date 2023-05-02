import EmpresaAbstract from '../abstract-classes/EmpresaAbstract';
import { Empresa } from '../types/EmpresaType';

export default class EmpresaModel extends EmpresaAbstract{
    private constructor(empresa: Empresa){
        super(empresa);
    }

    public static criaEmpresaModel(empresa: Empresa): Empresa{
        return new EmpresaModel(empresa);
    }
}