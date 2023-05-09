import { Cardapio } from "../types/CardapioType";
import { Empresa } from "../types/EmpresaType";

export default interface IEmpresa extends Empresa{
    addCardapio(cardapio: Cardapio, empresa: Empresa): Promise<void>;
    removeCardapio(id: number, empresa: Empresa): Promise<void>;
    atualizaCardapio(id: number, cardapio: Cardapio): Promise<void>;
}