//Uma classe é um conjunto de atributos e métodos
class Pessoa {
    //Atributos - armazenam informações
    public nome: string; //this.nome refere-se a isso
    idade: number; //this.idade refere-se a isso

    //Métodos - executam ações
    constructor(parametroNome: string, parametroIdade: number) {
        //paramentroNome e paramentroIdade só existem dentro do escopo do método, atribuindo ele a this.nome e this.idade, o escopo é ampliado para toda a classe.
        this.nome = parametroNome;
        this.idade = parametroIdade;
        
        console.log(`A pessoa ${this.nome} de idade ${this.idade} está andando.`)
    }
}

export default Pessoa;

//criando um objeto que instancia ou representa a classe pessoa
//tudo que precisamos, usamos o objeto funcionário
//const funcionario = new Pessoa("Nani", 32);

//chamando o método andar do objeto funcionário
//funcionario.andar("Nani", 32);

/*Orientação a objetos é um estilo de programação
Tudo começa na classe. A classe é um modelo.
- Cria-se uma pasta começando com letra maiúscula, bem como o nome da classe
- Na programação, sempre programamos em inglês, inclusive o nome dos identificadores.
Variável dentro da classe se chama atributo, eles armazenam valores. 
Função dentro de classe é um método.
- Uma classe é um conjunto de atributos e métodos
- Armazena algo? é atributo. Executa alguma coisa? É método. 
- A classe é apenas um modelo. É preciso criar uma variável e atribuir a classe, ela usará o modelo da classe.
- Quando você cria um atributo, ou você inicializa o valor dele, ou define no método construtor.
- Posso ter mais de um construtor com parâmetros diferentes, porém não atribua mais de uma responsabilidade.
- Parâmetros podem estar vazios.
- index.ts é um nome reservado. Ele é o primeiro a ser executado automaticamente se eu não chamar ninguém
import Pessoa from './Pessoa';
export default Pessoa;
Quando usamos a palavra export, o código está disponível para ser chamado em outro lugar;
*/