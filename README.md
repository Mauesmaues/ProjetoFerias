# Projeto Métricas Google Ads

Este projeto é um backend Node.js utilizando Express.js e MongoDB para capturar, tratar e visualizar métricas do Google Ads.

## Estrutura de Pastas
- `src/controllers`: Lógica dos controladores
- `src/models`: Modelos do banco de dados (Mongoose)
- `src/routes`: Rotas da API
- `src/services`: Serviços de integração e regras de negócio
- `src/config`: Configurações (ex: conexão MongoDB)

## Instalação
1. Clone o repositório
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente em um arquivo `.env`
4. Inicie o servidor:
   ```sh
   node src/index.js
   ```

## Funcionalidades
- Integração com API do Google Ads
- Armazenamento e tratamento de métricas
- Exposição de endpoints REST para consulta dos dados

## Requisitos
- Node.js
- MongoDB

---

> Estrutura inicial gerada automaticamente. Personalize conforme as regras de negócio.
