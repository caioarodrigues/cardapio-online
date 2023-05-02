import { Request, Response } from 'express';
import { Empresa } from '../types/EmpresaType';
import { Cardapio } from '../types/CardapioType';

export default class EmpresaController{
    private constructor(){}
    public static criaController(){
        return new EmpresaController();
    }

    async criaEmpresa(req: Request, res?: Response){
        const { empresa } = req.body;
        
    }
    async criaCardapio(req: Request, res?: Response){
        const { cardapio } = req.body;
    }
    async removeCardapio(req: Request, res?: Response){
        const { id } = req.body;
    }
    async editaCardapio(req: Request, res?: Response){
        const { cardapio } = req.body;
    }
}