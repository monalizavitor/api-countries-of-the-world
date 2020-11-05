# API Countries Of The World

API desenvolvida como exercício da semana 13 da [{reprograma}](https://github.com/reprograma).

A aplicação armazena dados através do MongoDB e manipula informações de todos os países do mundo.

Método | Rota |	Descrição |
-----| ------- | --------- |
GET |`/countries` |	Retorna todos os países.
GET |`/countries/:id` |	Retorna um dado a partir de um parâmetro.
POST | `/countries/` |	Adiciona um dado.
PUT | `/countries/:id` |	Altera um dado a partir de um parâmetro.
DELETE | `/countries/:id` |	Deleta um dado a partir de um parâmetro.

## Importando o JSON para o MongoDB
`mongoimport --db=reprograma --collection=countriesOfWorld --jsonArray --file=./src/data/data.json`

O JSON usado para manipulação dos dados está disponível [neste repositório](https://github.com/fabian7593/CountryAPI/tree/master/CountryAPI).

### Ferramentas utilizadas

* Node.js
* Express
* Nodemon
* Mongoose
* Cors


#### Para iniciar dê um **npm install** e depois **npm start**!
