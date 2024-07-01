# playground for web app starter

**purpose**: Make a starter repo with front / back ready with basic stufflike user management ready.

## run

- `cd web` `yarn dev`
- `cd server` `yarn dev`

=> web on http://localhost:8080
=> server on http://localhost:3000

=> try `curl -i localhost:3000/bats/findAll --request POST`

## stack

- front :

  - react
  - tailwind
  - react-query
  - react-hook-form
  - playwright test

- back :

  - nest
  - postgres ou sqlit

## notes

- back :
  - business logic separated in modules (and sepated from route controler and DB usage)
  - screaming folder structure
  - no CRUD but just POST /withClearAction
  - no param in url, no query in url, just JSON body
