import Pessoa from "../Pessoa";

//a classe funcionario é filha da classe pessoa. Isso é chamado inheritance/herança
//funcionario é a classe estendida
class Funcionario extends Pessoa {
    ri: string;
    cpf: string;

    constructor(parametroNome: string, parametroIdade: number, parametroRi: string, parametroCpf: string) {
        //chamando parametros da classe mãe, tem que ser chamado na ordem. Chamando o construtor da classe pessoa. O super é o apelido do construtor da classe base.
        super(parametroNome, parametroIdade)
        this.ri = parametroRi;
        this.cpf = parametroCpf;

        this.cadFuncionario();
    }
    cadFuncionario() {
        console.log(`Funcionário ${this.nome} cadastrado com sucesso.`)
    }
}

export default Funcionario;

//criando um objeto que instancia ou representa a classe funcionario
//const avanade = new Funcionario('Nani', 32);