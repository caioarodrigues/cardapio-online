import express, { Router, Request, Response } from "express";
import CardapioController from "../controllers/CardapioController";

const router: Router = Router();
const cardapioController: CardapioController = CardapioController.criaController();

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
});

export default router;