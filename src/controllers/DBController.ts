import { Cardapio } from "../types/CardapioType";
import { Empresa } from "../types/EmpresaType";

export default class DBController{
    private constructor(){}
    public static criaController(){
        return new DBController();
    }

    private async atualizaDados(){}
    async criaUsuario(): Promise<void>{}
    async criaEmpresa(empresa: Empresa): Promise<void>{}
    async removeEmpresa(empresa: Empresa): Promise<void>{}
    async editaEmpresa(empresa: Empresa, novosDados: Empresa): Promise<void>{}
    async getEmpresa(nome: string): Promise<Empresa> {
        //depois mudo
        const empresa: Empresa = {
            nome: "",
            telefone: 0
        }

        return empresa;
    }
    async criaCardapio(cardapio: Cardapio, empresa: Empresa): Promise<void>{
        empresa.cardapios?.push(cardapio);
        this.atualizaDados();
    }
    async editaCardapio(id: number, novoCardapio: Cardapio): Promise<void>{}
    async removeCardapio(id: number): Promise<void>{}
    async getCardapio(id: number): Promise<Cardapio> {
        const cardapio: Cardapio = {
            nomeEmpresa: "",
            telefoneEmpresa: 0,
            id: 0,
            itens: []
        } 

        return cardapio;
    }
    async getTodosCardapios(): Promise<Cardapio[]>{
        return [];
    }
}