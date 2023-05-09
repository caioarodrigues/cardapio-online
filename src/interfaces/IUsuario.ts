import { Cardapio } from "../types/CardapioType";
import { CardapioException } from "../exceptions/CardapioException";

export default interface IUsuario{
    verCardapio(id: number): Promise<Cardapio | CardapioException>;
    verTodosCardapios(): Promise<Cardapio[] | CardapioException>;
}