import express, { Router, Request, Response } from "express";
import CardapioController from "../controllers/CardapioController";
import CardapioModel from "../models/Cardapio";

const router: Router = Router();
const cardapioController: CardapioController = CardapioController.criaController();

router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const resultado = cardapioController.getCardapio(id);
    
    res.sendStatus(200).json(resultado);
});

export default router;