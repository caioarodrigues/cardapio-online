import IEmpresa from '../interfaces/IEmpresa';
import { Cardapio } from '../types/CardapioType';
import { Empresa as EmpresaType } from '../types/EmpresaType'
import EmpresaController from '../controllers/EmpresaController';

export default abstract class Empresa implements IEmpresa{
    private empresaController = EmpresaController.criaController();
    nome: string;
    telefone: number;
    cardapios?: Cardapio[] | [];

    protected constructor(empresa: EmpresaType){
        const { nome, telefone, cardapios } = empresa;
        this.nome = nome;
        this.telefone = telefone;
        this.cardapios = cardapios;
    }

    async addCardapio(cardapio: Cardapio, empresa: Empresa): Promise<void>{
        await this.empresaController.criaCardapio(cardapio, empresa);
    }
    async removeCardapio(id: number, empresa: Empresa): Promise<void> {
        await this.empresaController.removeCardapio(id, empresa);
    }
    async atualizaCardapio(id: number, cardapio: Cardapio): Promise<void> {
        await this.empresaController.editaCardapio(id, cardapio);
    }
}