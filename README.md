# Exercício Final de OOP em JavaScript

### Requisitos Gerais:

1. O projeto deve ser implementado em JavaScript, utilizando classes para representar o sistema bancário simulado.
2. As classes devem incorporar conceitos avançados de programação orientada a objetos, como herança, polimorfismo, encapsulamento, getters e setters.
3. O projeto deve ser modular e seguir boas práticas de codificação, como separação de responsabilidades e uso adequado de padrões de projeto.

### Classes e Funcionalidades:

1. **Classe Conta:**
    - Atributos privados: `numeroConta`, `saldo`.
    - Atributos públicos: `nomeUsuario`, `profissaoUsuario`.
    - Métodos públicos:
        - `constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario)`: inicializa uma nova conta com número de conta, saldo inicial, nome do usuário e profissão do usuário.
        - `criarConta()`: cria uma nova conta e exibe uma mensagem de sucesso.
        - `checarExtrato()`: exibe o extrato da conta, incluindo número de conta, saldo atual, nome do usuário e profissão do usuário.
        - `solicitarEmprestimo(valor)`: solicita um empréstimo na conta e exibe uma mensagem indicando o valor solicitado.
        - `static imprimirInstrucoes()`: exibe instruções gerais para o uso das contas.
2. **Classe ContaCorrente (Herança de Conta):**
    - Além dos atributos e métodos da classe `Conta`, a classe `ContaCorrente` deve conter:
        - Atributos privados adicionais: `limiteChequeEspecial`, `taxaManutencao`.
        - Atributo estático `contasCorrente`, que será um array que irá armazenar todas as contas correntes já criadas.
        - Métodos públicos adicionais:
            - `gerenciarLimiteChequeEspecial(novoLimite)`: gerencia o limite do cheque especial e exibe uma mensagem indicando a alteração.
            - `calcularTaxaManutencao()`: calcula a taxa de manutenção da conta corrente e exibe o valor calculado.
        - `static listarTodasContasCorrente()`: lista todas as contas corrente criadas.
3. **Classe ContaPoupanca (Herança de Conta):**
    - Além dos atributos e métodos da classe `Conta`, a classe `ContaPoupanca` deve conter:
        - Atributos privados adicionais: `taxaJuros`, `limiteSaques`.
        - Atributo estático `melhoresInvestimentos` = ["Tesouro Direto", "Ações"];
        - Métodos públicos adicionais:
            - `calcularJuros()`: calcula os juros da conta poupança com base na taxa de juros e exibe o valor calculado.
            - `gerenciarLimiteSaques(novoLimite)`: gerencia o limite de saques da conta poupança e exibe uma mensagem indicando a alteração.
        - `static verificarMelhorInvestimento()`: verifica o melhor investimento disponível para contas poupança.

### Outros Requisitos:

1. Os métodos getters e setters devem ser utilizados para acessar e modificar os atributos privados das classes, exceto para `nomeUsuario` e `profissaoUsuario`.
2. A implementação das classes deve seguir os princípios de encapsulamento, garantindo que os atributos privados sejam acessados apenas por meio dos métodos públicos.

### Pontos extras

Vale pontos extras, o aluno que trouxer propriedades, metódos e/ou classes adicionais ao que for pedido.

### Considerações Finais:

1. Os alunos devem demonstrar uma compreensão sólida dos conceitos de herança, polimorfismo, encapsulamento, getters e setters na implementação das classes.
2. O código deve ser bem documentado e seguir um estilo de codificação consistente.
