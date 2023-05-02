import CardapioAbstract from "../abstract-classes/CardapioAbstract";
import { Cardapio } from "../types/CardapioType";

export default class CardapioModel extends CardapioAbstract{
    private constructor(cardapio: Cardapio){
        super(cardapio);
    }

    public static criaCardapioModel(cardapio: Cardapio): Cardapio{
        return new CardapioModel(cardapio);
    }
}