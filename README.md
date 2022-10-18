## Objetivo

O projeto DataCapes tem como objetivo permitir a importação de currículos Lattes (em formato XML) de seus pesquisadores para manipulação e extração de informações.

O sistema será capaz extrair os dados de publicações (em eventos e periódicos), extraindo todos os dados pertinentes, em especial, autores e dados do periódico/evento, bem como dados adicioanis da publicação. O sistema também vai permitir a extração de daos referentes aos projetos e as demais produções técnicas dos currículos.

O objetivo final é a geração de relatórios utilizados para o preenchimento da plataforma SUCUPIRA com informações precisas sobre a produção dos programs de pós, de maneira a evitar ambiguidade e aumentar a qualidade dos dados entregues para avaliação.

## Stack

- TypeScript
- PostgreSQL
- TypeORM
- Express

## Banco de dados - Modelo relacional

https://dbdiagram.io/d/622fe1a7df21d94038615cc8

## Executando

### Back-end em desenvolvimento

```
$ npm run build
$ npm run dev
```

### Migrations

```
$ npm run build
$ npx typeorm migration:run
```

Rollback

```
$ npm run build
$ npx typeorm migration:revert
```
