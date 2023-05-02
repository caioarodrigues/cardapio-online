import { Cardapio } from "../types/CardapioType";

export default interface IUsuario{
    verCardapio(id: number): Cardapio;
    verTodosCardapios(): Array<Cardapio>;
}