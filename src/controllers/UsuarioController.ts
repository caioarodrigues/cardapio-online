import { Request, Response } from "express";

export default class UsuarioController { 
    private constructor(){}
    public static criaController(){
        return new UsuarioController();
    }

    async verCardapio(req: Request, res?: Response){}
    async verTodosCardapios(req: Request, res?: Response){}
}