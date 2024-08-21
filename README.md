# documentação back-end

## sessão 1

- Lista

Texto normal
> Está é uma citação

```phyton

def function ( var1, var2):
    return var1 + var2
```

```bash
 npm isntall
 ```

## README - Sistema de Biblioteca
Descrição do Projeto
Este projeto é um Sistema de Biblioteca desenvolvido em TypeScript, projetado para gerenciar o empréstimo de livros, cadastro de usuários e controle de estoque de obras literárias.
Requisitos Funcionais
Os requisitos funcionais descrevem as funcionalidades que o sistema deve oferecer. Os principais requisitos são:

    Cadastro de Usuários: O sistema deve permitir que novos usuários se registrem.

    Cadastro de Livros: O sistema deve permitir que os bibliotecários adicionem novos livros ao catálogo.

    Empréstimo de Livros: Os usuários devem poder solicitar o empréstimo de livros disponíveis.

    Devolução de Livros: O sistema deve registrar a devolução de livros emprestados.

    Consulta de Livros: Os usuários devem poder pesquisar livros por título, autor ou gênero.

    Relatórios: O sistema deve gerar relatórios sobre empréstimos, devoluções e livros disponíveis.

    Rankeamento de livros: Sistema de opinião de livros que permitem os usuarios filtrarem as melhores escolhas


Requisitos Não Funcionais
Os requisitos não funcionais definem as qualidades do sistema. Os principais requisitos são:

    Desempenho: O sistema deve ser capaz de processar até 50 requisições simultâneas sem degradação de desempenho.

    Segurança: Os dados dos usuários e livros devem ser protegidos por autenticação e criptografia.

    Usabilidade: A interface deve ser intuitiva e fácil de navegar para usuários e bibliotecários.

    Escalabilidade: O sistema deve ser capaz de suportar um aumento no número de usuários e livros sem comprometer a performance.

Dependências
Para o funcionamento adequado do projeto, as seguintes dependências são necessárias:

    Node.js: Versão 14 ou superior.
    TypeScript: Versão 4.0 ou superior.
    Express: Para criar a API do servidor.
    MongoDB: Para o armazenamento de dados.
    bcrypt: Para a criptografia de senhas.
    jsonwebtoken: Para a autenticação de usuários.

Dependências
Para o funcionamento adequado do projeto, as seguintes dependências são necessárias:

    Node.js: Versão 14 ou superior.
    TypeScript: Versão 4.0 ou superior.
    Express: Para criar a API do servidor.
    MongoDB: Para o armazenamento de dados.
    bcrypt: Para a criptografia de senhas.
    jsonwebtoken: Para a autenticação de usuários.

Para instalar as dependências, execute o seguinte comando:

bash
npm install

Análise de Riscos
A análise de riscos é crucial para identificar possíveis problemas que podem afetar o projeto. Os principais riscos incluem:

    Falhas de Segurança: Acesso não autorizado aos dados dos usuários e livros.
        Mitigação: Implementar autenticação robusta e criptografia de dados sensíveis.
    Desempenho: O sistema pode não suportar um grande número de usuários simultâneos.
        Mitigação: Realizar testes de carga e otimizar consultas ao banco de dados.
    Dependências Desatualizadas: O uso de bibliotecas desatualizadas pode introduzir vulnerabilidades.
        Mitigação: Manter as dependências atualizadas e monitorar vulnerabilidades.
    Perda de Dados: Risco de perda de dados devido a falhas no servidor ou no banco de dados.
        Mitigação: Implementar backups regulares e um sistema de recuperação de dados.



Autor: Lucas Alvares
