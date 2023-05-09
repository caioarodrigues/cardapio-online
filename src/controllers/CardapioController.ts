import DBController from './DBController';
import { Cardapio } from '../types/CardapioType';
import { CardapioException } from '../exceptions/CardapioException';

export default class CardapioController {
    private bd = DBController.criaController();

    private constructor(){}
    public static criaController(){
        return new CardapioController();
    }
    async getCardapio(id: number): Promise<Cardapio | CardapioException>{
        try{
            const cardapio = this.bd.getCardapio(id);
            const ehValido: boolean = !!cardapio;

            if(!ehValido){
                //por enquanto só isso
                const except: CardapioException = {
                    errMsg: {
                        msg: 'testando',
                        id: 1
                    }
                }

                return except;
            }

            return cardapio;
        }
        catch(err){
            console.log(`erro ao tentar obter o cardápio...`);
            console.error(err);

            const except: CardapioException = {
                errMsg: {
                    msg: 'erro',
                    id: 0
                }
            }

            return except;
        }
    }
}