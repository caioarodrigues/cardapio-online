import { Request, Response } from 'express';

export default class CardapioController {
    private constructor(){}
    public static criaController(){
        return new CardapioController();
    }
    async getCardapio(req: Request, res?: Response){
        const { id } = req.body;
        //...
    }
}