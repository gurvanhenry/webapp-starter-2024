# playground for web app starter

**purpose**: Make a starter repo with front / back ready with basic stufflike user management ready.

## stack

- front :

  - react
  - tailwind
  - react-query
  - react-hook-form

- back :

  - featherjs
  - email service

## todo

- add a docker-compose

## maybe try / include

- auth-js and express
- nest js
- meteor
- express
- prisma
- react admin
- zod

## run with docker
- `cd web` `docker build --tag webapp-starter-web .`

- `docker run -p 8080:8080 webapp-starter-web`
- `docker run -p 8080:8080 -d webapp-starter-web`

other:
`docker ps`
`docker stop CONTAINERID`
`docker rm CONTAINERID`

- `docker-compose up -d`
- `docker-compose down`
