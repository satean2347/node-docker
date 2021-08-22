# create nodejs 
- npm init -y
    => package.json
- npm install express
   => node_module 

# create file index.js and run 
- node index.js 
#delete non image 
  docker rmi $(docker images --filter "dangling=true" -q --no-trunc)

# create Dockerfile  run  and edit
- docker build -t node-app-image .
- docker run -p 3000:3000  -d --name  node-app node-app-image
- docker exec -it node-app bash
# volumes
- docker run -v ${PWD}:/app -p 3000:3000  -d --name  node-app node-app-image
- npm install nodemon --save-dev
 -docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000  -d --name node-app node-app-image
--read only
- docker run -v ${PWD}:/app:ro -v /app/node_modules -p 3000:3000  -d --name node-app node-app-image
- docker run -v ${PWD}:/app -v /app/node_modules --env-file ./.env  -p 3000:4000  -d --name node-app node-app-image
- docker volume prune

# docker-compose 
    docker-compose up -d 
    docker-compose up -d --build
    docker-compose  -f docker-compose.yml -f docker-compose.dev.yml up -d
    docker-compose  -f docker-compose.yml -f docker-compose.dev.yml down -v
#Database mongoDB
    docker exec -it nodedocker_mongo_1 nodedocker_mongo -u "root" -p "61Faucet"
    npm install mongoose
    
#  production
docker-compose  -f docker-compose.yml -f docker-compose.prod.yml up -d --build --no-deps node-app
