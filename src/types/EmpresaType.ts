import { Cardapio } from "./CardapioType";

export type Empresa = {
    nome: string;
    telefone: number;
    cardapios?: Array<Cardapio>;
}