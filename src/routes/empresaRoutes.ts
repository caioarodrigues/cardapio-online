import express, { Router, Request, Response } from "express";
import EmpresaController from '../controllers/EmpresaController';
import EmpresaModel from "../models/Empresa";

const router: Router = Router();
const empresaController: EmpresaController = EmpresaController.criaController();

router.post('/cria-empresa', async (req: Request, res: Response) => {
    const { empresa } = req.body;
    //const emp = EmpresaModel.criaEmpresaModel(empresa);
    
    await empresaController.criaEmpresa(empresa);
    res.sendStatus(200).send('criado');
});

router.post('/cria-cardapio', async (req: Request, res: Response) => {
    const { empresa, cardapio } = req.body;
    //const emp = EmpresaModel.criaEmpresaModel(empresa);

    await empresaController.criaCardapio(cardapio, empresa);
});

router.put('/edita-cardapio', async (req: Request, res: Response) => {
    const { id, cardapio } = req.body;
    //const emp = EmpresaModel.criaEmpresaModel(empresa);

    await empresaController.editaCardapio(id, cardapio);
});

router.delete('/remove-cardapio', async (req: Request, res: Response) => {
    const { id, empresa } = req.body;
    //const emp = EmpresaModel.criaEmpresaModel(empresa);

    await empresaController.removeCardapio(id, empresa);
});

export default router;