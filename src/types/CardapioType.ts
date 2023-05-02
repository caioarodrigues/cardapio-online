import { Item } from "./ItemType"

export type Cardapio = {
    nomeEmpresa: string;
    telefoneEmpresa: number;
    id: number;
    itens: Array<Item>;
}