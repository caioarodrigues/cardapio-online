import IUsuario from "../interfaces/IUsuario";
import { Cardapio } from "../types/CardapioType";
import UsuarioController from "../controllers/UsuarioController";

export default abstract class UsuarioAbstract implements IUsuario{
    private usuarioController: UsuarioController = UsuarioController.criaController();

    protected constructor() {}
    verCardapio(id: number): Cardapio {
        //const cardapio = await this.usuarioController.verCardapio()
        throw new Error("Method not implemented.");
    }
    verTodosCardapios(): Cardapio[] {
        throw new Error("Method not implemented.");
    }
}