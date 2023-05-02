import ICardapio from "../interfaces/ICardapio";
import { Cardapio } from "../types/CardapioType";
import CardapioController from "../controllers/CardapioController";
import { Item } from "../types/ItemType";

export default class CardapioAbstract implements ICardapio{
    nomeEmpresa: string;
    telefoneEmpresa: number;
    id: number;
    itens: Item[];
    private cardapioController = CardapioController.criaController();

    protected constructor(cardapio: Cardapio){
        const { nomeEmpresa, telefoneEmpresa, itens } = cardapio;
        
        this.nomeEmpresa = nomeEmpresa;
        this.telefoneEmpresa = telefoneEmpresa;
        this.itens = itens;
        this.id = 0;
    }
    getCardapio(id: number): Cardapio {
        
        throw new Error("Method not implemented.");
    }
    
}