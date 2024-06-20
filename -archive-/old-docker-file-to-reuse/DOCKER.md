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
