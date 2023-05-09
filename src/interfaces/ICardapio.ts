import { CardapioException } from "../exceptions/CardapioException";
import { Cardapio } from "../types/CardapioType";

export default interface ICardapio extends Cardapio{
    getCardapio(id: number): Promise <Cardapio | CardapioException>;
}