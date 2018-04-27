# ir_web_api
InspectorRestaurant Express.Js API Server

This repository maintains all the source code for the server-side application running at [Inspector.Restaurant](http://inspector.restaurant).

## Getting Started

### Prerequisites
- Node.js 8.x.x
- npm 3.x

### Installing & Configuration
1) Install dependencies
```
npm install
```

2) Run the `docker-compose.yml` file in [ir_data](https://github.com/InspectorRestaurant/ir_data)

### Run the server
```
npm start
```

### Development
A [Postman](https://www.getpostman.com/) collection and environments (`dev` and `production`) are included in this repository to support API development - they are located in the `.postman` directory. Read the Postman [documentation](https://www.getpostman.com/docs/postman/collections/data_formats) about importing collections and environments.

### Documentation
Documentation is auto-generated from [APIDoc.JS](http://apidocjs.com). Build the documentation with the `npm run apidoc` command.

## License
[MIT License](http://opensource.org/licenses/MIT).
