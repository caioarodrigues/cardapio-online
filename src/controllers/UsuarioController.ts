import DBController from "./DBController";
import { Cardapio } from "../types/CardapioType";
import { CardapioException } from "../exceptions/CardapioException";

export default class UsuarioController { 
    private bd = DBController.criaController();

    private constructor(){}
    public static criaController(){
        return new UsuarioController();
    }

    async verCardapio(id: number): Promise<Cardapio | CardapioException>{
        const cardapio = await this.bd.getCardapio(id);

        if(!cardapio){
            return {
                errMsg: {
                    msg: 'erro ao localizar o cardápio',
                    id: 2
                }
            }
        }

        return cardapio;
    }
    async verTodosCardapios(): Promise<Cardapio[] | CardapioException>{
        const todosCardapios = await this.bd.getTodosCardapios();

        if(!todosCardapios){
            return {
                errMsg: {
                    msg: 'não exite nehum cardápio cadastrado!',
                    id: 3
                }
            }
        }

        return todosCardapios;
    }
}