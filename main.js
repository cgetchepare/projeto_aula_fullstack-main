const { mostrarInfo } = require('./utils/mostrar_info');

const readlineSync = require("readline-sync");

const empresa = {
    nome: "",
    razao_social: "",
    cnpj: "",
    inscricao_estadual: "",
    areas_atuacao: [],
    meta_anual: [],
    dataFundacao: "",
    endereco: {
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        cep: ""
    },
    contato: {
        telefone: "",
        email: "",
        site: ""
    },
    funcionarios: []
}

function exibirMenu() {
    console.log("\n========================================================");
    console.log("              🏢SISTEMA DE GESTAO EMPRESARIAL🏢");
    console.log("========================================================\n");
    console.log("                      MENU EMPRESARIAL\n");
    console.log("1  - Informacoes do Software");
    console.log("2  - Calculadora de Salario Liquido");
    console.log("3  - Editar Dados Basicos da Empresa");
    console.log("4  - Editar Endereco da Empresa");
    console.log("5  - Editar Dados de Contato");
    console.log("6  - Editar Meta Anual");
    console.log("7  - Editar Areas de Atuacao");
    console.log("8  - Exibir Informacoes da Empresa");
    console.log("9  - Cadastrar Novo Funcionario");
    console.log("10 - Exibir Quadro de Funcionarios");
    console.log("11 - Exibir Folha de Pagamento");
    console.log("0  - Sair");
    console.log("\n========================================================");

}

var op = 1;
var menu = true;

while (menu == true) {
    exibirMenu();
    op = Number(readlineSync.question("Informe uma opcao: "));
    switch (op) {
        case 0:
            menu = false;
            break;
        case 1:
            mostrarInfo();
            readlineSync.question("\nTecle [ENTER] para continuar ");
            break;
        case 2:
            // Code to run if expression === value2
            break;
        case 3:
            // Code to run if expression === value2
            break;
        case 1:
            // Code to run if expression === value2
            break;
        case 4:
            // Code to run if expression === value2
            break;
        case 5:
            // Code to run if expression === value2
            break;
        case 6:
            // Code to run if expression === value2
            break;
        case 7:
            // Code to run if expression === value2
            break;
        case 8:
            // Code to run if expression === value2
            break;
        case 9:
            // Code to run if expression === value2
            break;
        case 10:
            // Code to run if expression === value2
            break;
        case 11:
            // Code to run if expression === value2
            break;
        default:
            readlineSync.question("\nOpcao invalida! Tecle [ENTER] para continuar. ");
            break;
    }

}