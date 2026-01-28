# Gundam Backend API

## Summary

Backend in Node.js + Express connected to PostgreSQL to information queries about Gundam Wing Mobile Suits.

Educational project focused in learning:

- PostgreSQL

- Node.js (ES Modules)

- Express

- Environment Variables

- Backend good practices

## Pre-requisites

We need to build for this project a local Postgresql database with theese attibutes:

- factions table:

| Field |    Type     |
| :---- | :---------: |
| id    | SERIAL (PK) |
| name  |    TEXT     |

- mobile_suits table:

| Field         |            Type            |
| :------------ | :------------------------: |
| id            |        SERIAL (PK)         |
| name          |            TEXT            |
| serial_number |            TEXT            |
| faction_id    | INTEGER (FK → factions.id) |

We need also a .env file stored in the backend directory to get access to the database:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=gundam_user
DB_PASSWORD=*****
DB_NAME=gundam_db
```

## Get Started

To get started we need to open the backend folder in our terminal, install and execute the npm service:

```bash
cd backend
npm install
npm start
```

## Query Example

An good example given the right databases should look like:

```bash
[
  {
    "id": 1,
    "name": "Wing Gundam",
    "serial_number": "XXXG-01W",
    "faction": "Space Colonies"
  }
]

```
