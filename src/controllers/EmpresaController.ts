import { Empresa } from '../types/EmpresaType';
import { Cardapio } from '../types/CardapioType';
import DBController from './DBController';

export default class EmpresaController{
    private bd = DBController.criaController();

    private constructor(){}
    public static criaController(){
        return new EmpresaController();
    }

    async criaEmpresa(empresa: Empresa){
        await this.bd.criaEmpresa(empresa);
    }
    async criaCardapio(cardapio: Cardapio, empresa: Empresa){
        //dá pra criar um cardápio, mas não será atribuído a nenhuma empresa
        await this.bd.criaCardapio(cardapio, empresa);
    }
    async removeCardapio(id: number, empresa: Empresa){
        const ehValido: boolean = !!empresa.cardapios?.find(c => c.id === id);
        
        if(ehValido)
            await this.bd.removeCardapio(id);
    }
    async editaCardapio(id: number, novoCardapio: Cardapio){
        await this.bd.editaCardapio(id, novoCardapio);
    }
}