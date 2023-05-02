import IEmpresa from '../interfaces/IEmpresa';
import { Cardapio } from '../types/CardapioType';
import { Empresa as EmpresaType } from '../types/EmpresaType'

export default abstract class Empresa implements IEmpresa{
    nome: string;
    telefone: number;
    cardapios?: Cardapio[] | undefined;

    protected constructor(empresa: EmpresaType){
        const { nome, telefone, cardapios } = empresa;
        this.nome = nome;
        this.telefone = telefone;
        this.cardapios = cardapios;
    }
    addCardapio(cardapio: Cardapio): void {
        throw new Error('Method not implemented.');
    }
    removeCardapio(id: number): void {
        throw new Error('Method not implemented.');
    }
    atualizaCardapio(cardapio: Cardapio): void {
        throw new Error('Method not implemented.');
    }
}