import express, { Router, Request, Response } from "express";
import empresaRoutes from './empresaRoutes';
import cardapioRoutes from './cardapioRoutes';
import usuarioRoutes from './usuarioRoutes';

const app = express();
const porta: number = 3003;

app.use('/empresa', empresaRoutes);
app.use('/cardapio', cardapioRoutes);
app.use('/usuario', usuarioRoutes);

app.listen(porta, () => {
    console.log(`Backend executando em ${porta}...`);
});