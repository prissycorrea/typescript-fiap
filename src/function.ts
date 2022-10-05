import { UserType } from './types/UserType';
//subrotina - a função está engessada
//void é sub no TS - não tem retorno
function escreveConsole(): void {
    console.log('Hello World!');
}

//function - a função é livre
function escreve(): string {
    return "bunnies";
}

escreveConsole()
//posso usar a função dentro de outras coisas, enquanto a subrotina fica engessada, só funciona nela mesma
console.log(`Os melhores babys do mundo são ${escreve()}`)

const empresa = 'Avanade';
console.log(
    empresa.toUpperCase(),
    empresa.toLowerCase(), //quando tem parênteses é um método
    empresa.length //quando não tem parênteses é uma propriedade
    )

const locale: string = 'pt-br';
const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
}

console.log(new Date().toLocaleDateString(locale, options))

const user: UserType = {
    name: 'Nani',
    age: 32,
    email: 'nani@bunny.com',
    address: {
        street: 'Rua Pompoelho',
        number: '27',
        city: 'Coelhandia',
        state: 'SP'
    },
    cpf: '123.456.789-00',
}