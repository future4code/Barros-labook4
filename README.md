# labook-template
Repositório do projeto Labook

## <h1 align="center">📇 Labook </h1>

## :memo: Descrição
Projeto desenvolvido como didática de back-end para as turmas JBL LABENU com conteúdos que englobam o universo da criação de uma API com a temática de um sistema de gerenciamento básico da organizaçãode labenu.

## Link Documentação Postman
[Doc_Postman](https://documenter.getpostman.com/view/22363157/2s935mtRKC)

## Link Deploy Render
https://labook4.onrender.com

##  👩🏾Pessoas Desenvolvedoras do Projeto

 [<img src="https://avatars.githubusercontent.com/u/74737156?v=4" width=115><br><sub>Byron Smith</sub>](https://github.com/byron-smith-nobrega)

## :books: Funcionalidades
* <b>Criar Estudantes</b>: Métodos voltados para a criação de usuários que são estudantes.
* <b>Buscar Estudantes</b>: Métodos voltados para a consulta de estudantes cadastradas.
* <b>Mudar Estudantes de Turma</b>: Métodos voltados para a alteração do estudante de turma.
* <b>Criar Docentes</b>: Métodos voltados para a criação de usuários que são pessoas instrutora.
* <b>Buscar Docentes</b>: Métodos voltados para a consulta de pessoas instrutoras cadastradas.
* <b>Mudar Docente de Turma</b>: Métodos voltados para a alteração do docente de turma.
* <b>Criar Turma</b>: Métodos para a criação de turmas.
* <b>Buscar Turma</b>: Métodos que realiza busca em banco das turmas ativas.
* <b>Mudar Turma Módulo</b>: Métodos voltados para a alteração da turma de mód.


## :wrench: Tecnologias utilizadas
* VS Code
* nodeJS
* expressJS
* axios
* cors
* dotenv
* MySQL


## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para instalar as dependências:
```
npm install
```
Após instaladas as dependências, configure o arquivo .env:
```
DB_HOST = 
DB_USER = ""
DB_PASS = ""
DB_NAME = ""
```
Após configuração do .env, dê o comando seguinte para rodar o migration:
```
npm run migrations
```
Após o migration, dê o comando seguinte para rodar a aplicação:
```
npm run start
```

Use o Postman ou o Insomnia para realizar as requisições desejadas.

## :dart: Status do projeto
O projeto está em andamento.

