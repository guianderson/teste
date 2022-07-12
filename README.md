## Description

NestJs Skeleton - Back-end

##  Requirements
 - NodeJS 16
 - NVM (optional) - https://github.com/nvm-sh/nvm#installing-and-updating
 - VSCode (optional)

## Installation

### npm

```bash
$ npm install
```

## Configuring

To configure, just duplicate and rename removing the `.in` from the two configuration files (`config.yaml.in` and `ormconfig.json.in`) located on the root folder.

After that, change the content of the `ormconfig.json` to set the user, password and the database/schema. The `config.yaml` don't have to be modified.

## Running the app

```bash
# development
$ npm start

# production mode
$ npm run start:debug

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Swagger

To open swagger interface, access: http://localhost:3200/api
