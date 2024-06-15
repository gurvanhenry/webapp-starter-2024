# get bat

curl 'http://localhost:3030/bat/'

# add bat

curl 'http://localhost:3030/bat/' \
  -H 'Content-Type: application/json' \
  --data-binary '{ "email": "hello@feathersjs.com", "password": "supersecret" }'

# delete bat

curl 'http://localhost:3030/bat/2' \
  -X DELETE 

# create user

curl 'http://localhost:3030/users/' \
  -X POST \
  -H 'Content-Type: application/json' \
  --data-binary '{ "email": "hello5@feathersjs.com", "password": "supersecret" }'


# login 

curl 'http://localhost:3030/authentication/' \
  -H 'Content-Type: application/json' \
  --data-binary '{ "strategy": "local", "email": "hello@feathersjs.com", "password": "supersecret" }'

# users with token 

curl 'http://localhost:3030/users/' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <accessToken>'

curl 'http://localhost:3030/users/' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE3MTg0NTUyMjYsImV4cCI6MTcxODU0MTYyNiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsInN1YiI6IjEiLCJqdGkiOiJlYjdiMDZmNC1hM2M2LTQzOWEtOTYzNy1hYzQxZTM1OWUyOGEifQ.jZqzqBxL2U0jxiZciTLSfW4XminVXCrcuseNtcXKWG8'
