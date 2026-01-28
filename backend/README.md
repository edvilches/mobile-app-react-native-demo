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

We need to run this project a Postgresql database with theese attibutes:

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
