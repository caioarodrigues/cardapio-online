import IUsuario from "../interfaces/IUsuario";
import { Cardapio } from "../types/CardapioType";
import UsuarioController from "../controllers/UsuarioController";
import { CardapioException } from "../exceptions/CardapioException";

export default abstract class UsuarioAbstract implements IUsuario{
    private usuarioController: UsuarioController = UsuarioController.criaController();

    protected constructor() {}
    async verCardapio(id: number): Promise<Cardapio | CardapioException> {
        const resposta = await this.usuarioController.verCardapio(id);

        return resposta;
    }
    async verTodosCardapios(): Promise <Cardapio[] | CardapioException> {
        const resposta = await this.usuarioController.verTodosCardapios();

        return resposta;
    }
}