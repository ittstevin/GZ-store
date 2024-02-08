# Server

## Overview
The `websocket-server` and `strapi-server` folders contain the backend code for the web application. These parts of the project handle various server-side functionalities such as WebSocket communication for user admin chat and content management using Strapi.


## Technologies Used
- **JavaScript**: The primary programming language used in the server-side code.
- **Node.js**: A JavaScript runtime for building server-side applications.
- **WebSocket**: A communication protocol for real-time, bidirectional communication between clients and servers.
- **Strapi**: A headless CMS (Content Management System) for managing application content.

## Getting Started
Follow these steps to set up and run the backend servers:

### WebSocket Server
1. Navigate to the `websocket-server` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the WebSocket server.

### Strapi Server
1. Navigate to the `strapi-server` directory.
2. Run `npm install` to install dependencies.
3. Run `npm run develop` to start the Strapi server.

## Additional Notes
- Ensure that the necessary environment variables are properly configured for the servers to function correctly.
- WebSocket server is responsible for facilitating real-time communication between administrators for chat functionality.
- Strapi server is used for content management, where administrators can upload and manage application content.

## Contributors
- [Tevin Munene](https://github.com/ittstevin)

## License
This project is licensed under the [MIT License](../LICENSE).

