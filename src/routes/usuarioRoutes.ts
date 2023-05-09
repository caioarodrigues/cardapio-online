import express, { Router, Request, Response } from "express";
import UsuarioController from "../controllers/UsuarioController";

const router: Router = Router();
const usuarioController = UsuarioController.criaController();

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const _: number = parseInt(id);
    const cardapio = await usuarioController.verCardapio(_);

    res.sendStatus(200).json(cardapio);
});

router.get('/todos-cardapios', async (req: Request, res: Response) => {
    const todosCardapios = await usuarioController.verTodosCardapios();

    res.sendStatus(200).json(todosCardapios);
});

export default router;