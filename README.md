# ppgcc-cm-datacapes-back

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
