curl -i localhost:3000

curl -i localhost:3000/bats/findAll \
--request POST

curl -i localhost:3000/bats/create \
--request POST \
--header "Content-Type: application/json" \
--data '{ "text": "yipi" , "status" : "open" }'

// BAD REQUEST:

curl -i localhost:3000/bats/create \
--request POST \
--header "Content-Type: application/json" \
--data '{ "bad" : "data" }'

curl -i localhost:3000/bats/changeStatus \
--request POST \
--header "Content-Type: application/json" \
--data '{ "id" : 1, "status" : "dead" }'

// BAD REQUEST:

curl -i localhost:3000/bats/changeStatus \
--request POST \
--header "Content-Type: application/json" \
--data '{ "id" : -55, "status" : "dead" }'

curl -i localhost:3000/bats/remove \
--request POST \
--header "Content-Type: application/json" \
--data '{ "id" : 1 }'