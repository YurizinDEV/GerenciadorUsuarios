# Gerenciador de Usuários — README

Este projeto é um gerenciador de usuários em linha de comando (CLI) usando Node.js e TypeScript. Ele permite **listar**, **cadastrar**, **alterar** e **deletar** usuários, cada um com atributos como **nome**, **email**, **senha**, **papel** e **status**.

## 🛠️ Tecnologias
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## Sumário

- [Estrutura do Projeto](#estrutura-do-projeto)  
- [Pré-requisitos](#pré-requisitos)  
- [Instalação](#instalação)  
- [Scripts Disponíveis](#scripts-disponíveis)  
- [Uso](#uso)
  - [Criar Seeds](#criarseeds)  
  - [Listar](#listar)  
  - [Cadastrar](#cadastrar)  
  - [Alterar](#alterar)  
  - [Deletar](#deletar)  

---

## Estrutura do Projeto

Estrutura de Arquivos e Pastas

```graphql
gerenciadorusuarios/  
│  
├── data/  
│   └── usuarios.csv   
├─ dist/
│  └─ (arquivos .js transpilados)
|
└── src/  
│  ├─ commands/
│  │  ├─ alterar.ts
│  │  ├─ cadastrar.ts
│  │  ├─ deletar.ts
│  │  └─ listar.ts
│  ├─ models/
|  │  ├─ papeis.ts
│  │  └─ usuario.ts
│  ├─ seeds/
│  │  └─ usuariosSeeds.ts
│  ├─ services/
│  │  ├─ csvService.ts
│  │  └─ usuarioService.ts
│  ├─ utils/
│  │  └─ validacoes.ts
│  └─ index.ts
|
├── .gitignore  
├── LICENSE    
├── package-lock.json  
├── package.json  
├── README.md  
└── tsconfig.json
```

---

## Pré-requisitos

1. **Node.js** (versão 16 ou superior).  
2. **npm** (gerenciador de pacotes embutido no Node.js) ou **yarn**.  

---

## Instalação

1. **Clone ou baixe** este repositório.  

```bash
git clone https://github.com/YurizinDEV/gerenciadorusuarios.git
```

2. Abra o terminal na pasta do projeto.  
3. Instale as dependências usando:
   ```bash
   npm install
   ```
4. Compile o TypeScript:
   ```bash
   npm run build
   ```
   Isto gerará a pasta `dist/` com os arquivos JavaScript transpilados.

---

## Scripts Disponíveis

No `package.json`, há (ou devem existir) os seguintes scripts principais:

- **`npm run build`**: compila o TypeScript gerando a pasta `dist/`.  
- **`npm run start`**: executa o arquivo `dist/index.js`, carregando os comandos do CLI.  

> Observação: Caso deseje desenvolver sem ficar repetindo “npm run build”, use ferramentas como `ts-node` ou `nodemon`, mas o script principal de produção é `npm run start`.

---

## Uso

Após compilar, você pode rodar o CLI com:
```bash
npm run start -- <comando> [opções]
```
> **Atenção:** O `--` após `npm run start` informa ao **npm** que os argumentos seguintes devem ser repassados ao seu programa (Commander).

### Criar Seeds
Para popular o banco de dados, arquivo csv, executeo seguinte comando:

```bash
npm run seed
```

### Listar

Lista usuários, seja todos ou um específico por ID. Exemplos:

```bash
npm run start -- listar --id 737ca05e-22e3-4fe8-8c58-8dfc1e147dd6
npm run start -- listar --id 1234
```

Para listar sem filtros (ex.: todos os registros):
```bash
npm run start -- listar
```

### Cadastrar

Registra um novo usuário no sistema. Requer `--nome`, `--email`, `--senha`, `--papel`:
```bash
npm run start -- cadastrar --nome "Yuri Ribeiro" --email "yuri@example.com" --senha "123456Yuri!" --papel "Convidado"

npm run start -- cadastrar --nome "Eduardo Tartas" --email "eduardo@example.com" --senha "12345Eduardo!" --papel "Convidado"
```

### Alterar

Atualiza dados de um usuário existente. Exige sempre `--id`, podendo alterar `--nome`, `--email`, `--senha`, `--papel`, `--status`:

```bash
npm run start -- alterar --id 737ca05e-22e3-4fe8-8c58-8dfc1e147dd6 --nome "João Silva Atualizado"
```
Testando ID inexistente:  
```bash
npm run start -- alterar --id 9999 --nome "Usuário Inexistente"
```
Mudando o status para inativo:  
```bash
npm run start -- alterar --id 737ca05e-22e3-4fe8-8c58-8dfc1e147dd6 --status false
```

### Deletar

Remove um usuário do repositório de dados, csv. Exige `--id`:

```bash
npm run start -- deletar --id 737ca05e-22e3-4fe8-8c58-8dfc1e147dd6

npm run start -- deletar --id 12345
```
Se o ID não existir, o sistema exibirá uma mensagem de erro "Usuário não encontrado".

---

### Licença
Esse projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) (caso exista) para mais detalhes.
