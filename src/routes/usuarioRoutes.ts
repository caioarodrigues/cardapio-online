import express, { Router, Request, Response } from "express";
import UsuarioController from "../controllers/UsuarioController";

const router: Router = Router();
const usuarioController = UsuarioController.criaController();

router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;

});

router.get('/todos-cardapios', (req: Request, res: Response) => {

});

export default router;