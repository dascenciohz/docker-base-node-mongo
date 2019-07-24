# docker-base-node-mongo
Docker base repository for Node projects with connection to MongoDB

1.- Set envaironment variables.

    MONGO_ROOT_USERNAME=rootapp
    MONGO_ROOT_PASSWORD=rootPass123
    MONGO_DATABASE=myapp
    MONGO_DATA=mongo-data
    MONGO_EXT_PORT=27017
    MONGO_INIT_SCRIPT=./configs/mongo/scripts
    APP_EXT_PORT=3000

    Alternatively you can create an .env file in the same path of the docker-compose.yml file with the variables named above.


2.- Edit mongo init script to set user and password app.

    vim configs/mongo/scripts/mongo-init.js


3.- Start up stack services.

    docker-compose -f "docker-compose.yml" up -d --build


NOTE: If the app return error connection to mongodb, restart container to resolve problem.