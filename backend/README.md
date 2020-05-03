Repository structure
  backend -> API Rest of application (NodeJS)
  frontend:
    frontend-client -> Web application for clients access (Angular 8)
    frontend-admin -> Web Application of administration (Angular 8)
  mobile -> Mobile application for clients access (Flutter)
  ui-ux -> Designs of project, web, mobile and resources

Softwares
  NodeJS - v12.16.2
  npm - 6.14.4
  yarn - 1.22.4 (https://classic.yarnpkg.com/pt-BR/docs/install/)
  docker - version 19.03.8 (https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2)
  flutter -
  Dbeaver - 7.0.3

Intalation guide
  -> BackEnd
    1 - exceute command: docker run --name comercial_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
    2 - create database "comercial_sao_francisco" with Dbeaver
    2 - execute command: yarn
    3 - run migrations: yarn typeorm migration:run

