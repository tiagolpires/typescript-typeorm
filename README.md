# Typescript-TypeORM API
REST API built with Typescript and TypeORM 
## Dependecies
Install the dependencies
```
npm install
```
## Docker
Initialize Docker's containers
```
docker-compose up
```
Acess Docker api container shell
```
docker exec -it typeorm-api sh
```
## Migrations
In docker's shell, run the migrations
```
npm run typeorm migration:run
```
To create more migrations run
```
npm run typeorm migration:create -- -n <migrationName>
```
To generate migrations run
```
npm run typeorm migration:generate
```
