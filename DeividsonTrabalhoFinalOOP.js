class Conta {
    #numeroConta;
    #saldo;
    nomeUsuario;
    profissaoUsuario
    static contas = []

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario) {
        this.#numeroConta = numeroConta;
        this.#saldo = saldoInicial;
        this.nomeUsuario = nomeUsuario;
        this.profissaoUsuario = profissaoUsuario;
    }

    get saldo() {
        return this.#saldo;
    }
    set saldo(valor) {
        this.#saldo = valor;
    }

    criarConta() {
        console.log("Conta criada com sucesso!");
    }

    checarExtrato() {
        console.log(`Número da conta: ${this.#numeroConta}, Saldo: ${this.#saldo}, Nome do usuário: ${this.nomeUsuario}, Profissão do usuário: ${this.profissaoUsuario}`);

    }

    solicitarEmprestimo(valor) {
        console.log(`Solicitado empréstimo de ${valor} na conta.`);
    }

    static imprimirInstrucoes() {
        console.log("Instruções gerais para uso das contas...");
    }
}

class ContaCorrente extends Conta {
    #limiteChequeEspecial;
    #taxaManutencao;
    static contasCorrente = [];
    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario, limiteChequeEspecial, taxaManutencao) {
        super(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario);
        this.#limiteChequeEspecial = limiteChequeEspecial;
        this.#taxaManutencao = taxaManutencao;
        ContaCorrente.contasCorrente.push(this);
        Conta.contas.push(this)
    }

    gerenciarLimiteChequeEspecial(novoLimite) {
        this.#limiteChequeEspecial = novoLimite;
        console.log(`Limite do cheque especial alterado para ${novoLimite}.`);
    }

    calcularTaxaManutencao() {
        console.log(`Taxa de manutenção calculada: ${this.#taxaManutencao}`);
    }

    static listarTodasContasCorrente() {
        console.log("Lista de todas as contas correntes:");
        for (const conta of ContaCorrente.contasCorrente) {
            console.log(conta);
        }
    }
}

class ContaPoupanca extends Conta {
    #taxaJuros;
    #limiteSaques;
    static melhoresInvestimentos = ["Tesouro Direto", "Ações"];
    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario, taxaJuros, limiteSaques) {
        super(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario);
        this.#taxaJuros = taxaJuros;
        this.#limiteSaques = limiteSaques;
        Conta.contas.push(this)
    }

    calcularJuros() {
        const juros = this.saldo * (this.#taxaJuros / 100);
        console.log(`Juros calculados: ${juros}`);
    }

    gerenciarLimiteSaques(novoLimite) {
        this.#limiteSaques = novoLimite;
        console.log(`Limite de saques alterado para ${novoLimite}.`);
    }

    static verificarMelhorInvestimento() {
        console.log("Melhor investimento disponível: " + ContaPoupanca.melhoresInvestimentos.join(", "));
    }
}

// Testes
const conta1 = new ContaCorrente(123456, 30000, "Deividson", "Dev", 1500, 20);
conta1.criarConta();
conta1.checarExtrato();
conta1.gerenciarLimiteChequeEspecial(1000);
conta1.calcularTaxaManutencao();

const conta11 = new ContaCorrente(974284, 100, "Maria", "Design", 500, 20);
conta1.criarConta();
conta1.checarExtrato();
conta1.gerenciarLimiteChequeEspecial(1000);
conta1.calcularTaxaManutencao();

const conta2 = new ContaPoupanca(789012, 2000, "Jessica", "Advogada", 0.1, 5);
conta2.criarConta();
conta2.checarExtrato();
conta2.calcularJuros();
conta2.gerenciarLimiteSaques(10);
ContaPoupanca.verificarMelhorInvestimento();

ContaCorrente.listarTodasContasCorrente();
console.log('Lista de Todas as Contas: ')
console.log(Conta.contas)