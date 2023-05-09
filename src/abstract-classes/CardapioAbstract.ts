import ICardapio from "../interfaces/ICardapio";
import { Cardapio } from "../types/CardapioType";
import CardapioController from "../controllers/CardapioController";
import { Item } from "../types/ItemType";
import { CardapioException } from "../exceptions/CardapioException";

export default class CardapioAbstract implements ICardapio{
    private cardapioController = CardapioController.criaController();
    nomeEmpresa: string;
    telefoneEmpresa: number;
    id: number;
    itens: Item[];

    protected constructor(cardapio: Cardapio){
        const { nomeEmpresa, telefoneEmpresa, itens } = cardapio;
        
        this.nomeEmpresa = nomeEmpresa;
        this.telefoneEmpresa = telefoneEmpresa;
        this.itens = itens;
        this.id = 0;
    }
    async getCardapio(id: number): Promise <Cardapio | CardapioException> {
        const esteCardapio = await this.cardapioController.getCardapio(id);

        if(!esteCardapio){
            return {
                errMsg: {
                    msg: 'Cardápio não encontrado',
                    id: 3
                }
            }
        }
        
        return esteCardapio;
    }
    
}