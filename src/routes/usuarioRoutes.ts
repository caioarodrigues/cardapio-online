import express, { Router, Request, Response } from "express";
import UsuarioModel from "../models/Usuario";

const router: Router = Router();
const usuario: UsuarioModel = UsuarioModel.criaUsuarioModel();

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const _: number = parseInt(id);
    const cardapio = await usuario.verCardapio(_);

    res.sendStatus(200).json(cardapio);
});

router.get('/todos-cardapios', async (req: Request, res: Response) => {
    const todosCardapios = await usuario.verTodosCardapios();

    res.sendStatus(200).json(todosCardapios);
});

export default router;