import { Cardapio } from "../types/CardapioType";
import { Empresa } from "../types/EmpresaType";

export default interface IEmpresa extends Empresa{
    addCardapio(cardapio: Cardapio): void;
    removeCardapio(id: number): void;
    atualizaCardapio(cardapio: Cardapio): void;
}