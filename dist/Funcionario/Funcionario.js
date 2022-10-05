"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(parametroNome, parametroRi, parametroCpf) {
        this.nome = parametroNome;
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        console.log(`Funcionário ${this.nome} cadastrado com sucesso.`);
    }
}
exports.default = Funcionario;
