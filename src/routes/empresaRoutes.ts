import express, { Router, Request, Response } from "express";
import EmpresaController from '../controllers/EmpresaController';

const router: Router = Router();
const empresaController: EmpresaController = EmpresaController.criaController();

router.post('/cria-empresa', (req: Request, res: Response) => {

});

router.post('/cria-cardapio', (req: Request, res: Response) => {

});

router.put('/edita-cardapio', (req: Request, res: Response) => {

});

router.delete('/remove-cardapio', (req: Request, res: Response) => {

});

export default router;