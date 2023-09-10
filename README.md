# score-management-app

## Entity Relationship Diagram

![ERD](score_mng_app_model.png)

## Chosen Architecture

![ERD](clean_architecture.png)



## Api Endpoints

### Tournaments

    - POST      /api/v1/tournaments
    - GET       /api/v1/tournaments
    - GET       /api/v1/tournaments/:name
    - PUT       /api/v1/tournaments/:name
    - DELETE    /api/v1/tournaments/:tournamentId

### Groups

    - POST      /api/v1/groups
    - GET       /api/v1/groups
    - GET       /api/v1/groups/:groupId
    - GET       /api/v1/groups/tournament/:tournamentId
    - PUT       /api/v1/groups/:groupName
    - DELETE    /api/v1/groups/:groupId


### Phases

    - POST      /api/v1/phases
    - GET       /api/v1/phases
    - GET       /api/v1/phases/:phaseId
    - GET       /api/v1/phases/tournament/:tournamentId
    - PUT       /api/v1/phases/:phaseName
    - DELETE    /api/v1/phases/:phaseId

### Teams

    - POST      /api/v1/teams
    - GET       /api/v1/teams
    - GET       /api/v1/teams/:teamId
    - GET       /api/v1/teams/group/:groupId
    - PUT       /api/v1/teams/:teamName
    - DELETE    /api/v1/teams/:teamId

### Players

    - POST      /api/v1/players
    - GET       /api/v1/players/:playerId
    - GET       /api/v1/players/team/:teamId
    - PUT       /api/v1/players/:playerName
    - DELETE    /api/v1/players/:playerId

### Matches

    - POST      /api/v1/matches
    - GET       /api/v1/matches/:matchId
    - GET       /api/v1/matches/tournament/:tournamentId
    - PUT       /api/v1/matches/:matchCode
    - DELETE    /api/v1/matches/:matchId


## Other internal services

### MatchService
    Adding winner for a match
### TeamMatchInfoService
    For getting statistics and update score about a match in a tournament fora specific team.
### TeamStatTournamentService
    For tracking points'team according to their score for all matches in a specific tournament


## Data Security Policy
 - JWT authentication
 - Encrypted password 

## Design Principles
  - SOLID principles

## Get started
 - git clone https://github.com/Duamelo/score-management-app.git


### Requirements

    - node js
    - websocket
    - postgresql
    - Typeorm (as DAO)


### Node js installation
  - [ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-fr)
  - [windows](https://nodejs.org/en/download/)

### Postgresql installation

  - [ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart)
  - [windows 10](https://www.veremes.com/installation-postgresql-windows)

### Dependances installation

    - cd scoreui && npm install
    - cd scoreapi && npm install

## Editing the .env file in the scoreapi directory
    - POSTGRES_HOST = localhost
    - POSTGRES_PORT = 5432
    - POSTGRES_USER = your_username
    - POSTGRES_PASSWORD = your_password
    - POSTGRES_DB = scoredb
    - JWT_SECRET = yatuezytyeztyezrtzyitazeyuazyziu
    - JWT_EXPIRATION_TIME = 36000
    - PORT=5000


## Database creation

    - create a user name {{username}}
    - replace duamelo with {{username}} in the score.sql script
    - restore database: psql database_name < score.sql
    - export existing database (for information): pg_dump -U username -p 5432 database_name > score.sql


## Launch application

    - cd scoreui 
    - run this command: npm run dev
    - cd scoreapi
    - run this command: npm run dev

## Profils (for testing)

### Admin
    - username: franck
    - password: 123456789

## Versions
    - Node js v18.17.1
    - npm v9.6.7

## Authors

* **David DOSSEH** _alias_[@Duamelo](https://github.com/Duamelo)

## Licence
