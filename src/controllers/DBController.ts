import { EmpresaException } from "../exceptions/EmpresaException";
import { CardapioException } from "../exceptions/CardapioException";
import { Cardapio } from "../types/CardapioType";
import { Empresa } from "../types/EmpresaType";

export default class DBController{
    private constructor(){}
    public static criaController(){
        return new DBController();
    }
    //integrar o banco de dados depois
    private empresasBD: Empresa[] = [];
    
    private async atualizaDados(){}
    async criaUsuario(): Promise<void>{}
    async criaEmpresa(empresa: Empresa): Promise<void>{
        this.empresasBD.push(empresa);
    }
    async removeEmpresa(empresa: Empresa): Promise<void>{}
    async editaEmpresa(empresa: Empresa, novosDados: Empresa): Promise<void>{}
    async getEmpresa(nome: string): Promise<Empresa | EmpresaException> {
        const empresa = this.empresasBD.find(({ nome: nomeEmpresa }) => nomeEmpresa === nome);

        if(!empresa){
            return {
                errMsg: {
                    msg: 'Empresa não encontrada!'
                }
            }
        }

        return empresa;
    }
    async criaCardapio(cardapio: Cardapio, empresa: Empresa): Promise<void>{
        this.empresasBD.forEach(e => {
            if(e === empresa){
                e.cardapios?.push(cardapio);
                
                return;
            }
        });
    }
    async editaCardapio(id: number, novoCardapio: Cardapio): Promise<void>{
        for(let empresa of this.empresasBD){
            if(!empresa.cardapios)
                continue;

            for(let i in empresa.cardapios){
                const cardapio = empresa.cardapios[i];
                
                if(cardapio.id === id){
                    empresa.cardapios[i] = novoCardapio

                    return;
                }
            }
        }
    }
    async removeCardapio(id: number): Promise<void>{
        this.empresasBD.forEach(({ cardapios }) => {
            if(!cardapios) return;

            for(let i = 0; i < cardapios.length; i++){
                const cardapio = cardapios[i];
                
                if(cardapio.id === id){
                    const index = this.empresasBD.findIndex(({ cardapios }) => {
                        if(!cardapios) return;

                        for(let cardapio of cardapios){
                            if(cardapio.id === id){
                                return cardapio;
                            }
                        }
                    });

                    delete this.empresasBD[index];

                    return;
                }
            }
        })
    }
    async getCardapio(id: number): Promise<Cardapio | CardapioException> {
        for(let empresa of this.empresasBD){
            const { cardapios } = empresa;
            const cardapio = cardapios?.find(cardapio => {
                if(cardapio.id === id) return cardapio;
            });
            
            if(cardapio) return cardapio;
        }

        return {
            errMsg: {
                msg: 'Erro ao encontrar o cardápio!'
            }
        }
    }
    async getTodosCardapios(): Promise<Cardapio[] | CardapioException>{
        const todosCardapios: Cardapio[] = [];

        this.empresasBD.forEach(({ cardapios }) => {
            if(!cardapios) return;
            
            todosCardapios.push(...cardapios);
        })

        if(todosCardapios) return todosCardapios;

        return {
            errMsg: {
                msg: 'Não há nenhum cardápio no banco de dados!'
            }
        }
    }
}