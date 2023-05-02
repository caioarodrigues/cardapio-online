import { Request, Response } from "express";

export default class DBController{
    private constructor(){}
    public static criaController(){
        return new DBController();
    }

    async criaUsuario(req: Request, res: Response){}
    async criaEmpresa(req: Request, res: Response){}
    async removeEmpresa(req: Request, res: Response){}
    async editaEmpresa(req: Request, res: Response){}
    async getEmpresa(req: Request, res: Response){}
    async criaCardapio(req: Request, res: Response){}
    async editaCardapio(req: Request, res: Response){}
    async removeCardapio(req: Request, res: Response){}
    async verCardapio(req: Request, res: Response){}
    async verTodosCardapios(req: Request, res: Response){}
}