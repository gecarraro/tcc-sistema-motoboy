# Sistema de Gestão de Entregas

Projeto desenvolvido como Trabalho de Conclusão da Pós-graduação em Desenvolvimento Full Stack - PUCRS.

## Sobre o projeto
Sistema web para gerenciamento de entregas de uma empresa de motoboy, permitindo o controle de clientes, cálculo automático de valores por bairro e registro de pedidos.

A aplicação foi desenvolvida com foco em boas práticas de desenvolvimento full stack, arquitetura em camadas e organização profissional do backend.

## Tecnologias

### Backend
- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JWT (autenticação)

### Frontend(Em construção)
- CSS
- HTML
- JavaScript

### DevOps(Em construção)
- Docker
- GitHub Actions (CI/CD)
- GitHub

## Funcionalidades

- Autenticação de usuários
- Cadastro de clientes
- Cadastro de tabela de preços por bairro
- Criação de pedidos
- Cálculo automático do valor da entrega
- API REST estruturada em camadas

## Arquitetura

O backend segue padrão de arquitetura em camadas:

- controllers -> regras de entrada/saída
- services -> regras de negócio
- routes -> endpoints da API
- middlewares -> autenticação

## Como executar o projeto

# instalar dependências
npm install

# rodar servidor
node server.js

# Servidor:
http://localhost:8080

## Objetivo acadêmico

Este projeto foi desenvolvido como requisito para conclusão da pós-graduação em Desenvolvimento Full Stack, com o objetivo de aplicar na prática conceitos de:

- Backend com Node.js
- Banco de dados relacional
- Arquitetura de software
- DevOps e versionamento
- Conteinerização
