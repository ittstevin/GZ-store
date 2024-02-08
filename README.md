# GZ store

## Overview
This project is a comprehensive web application designed for user administration, chat functionality, and content management. It comprises several components:

1. WebSocket server for user admin chat.
2. AdminChat: A separate React project for administrators to interact with users via chat.
3. Client: The frontend of the application, incorporating various technologies and libraries.
4. Strapi Server: A server where administrators can upload and manage content for the application.


## Technologies Used
1. **JavaScript**: The primary programming language used throughout the project.
2. **React**: A JavaScript library for building user interfaces.
3. **Material-UI**: A React UI framework for implementing Material Design.
4. **Redux Toolkit**: A library for efficient state management in React applications.
5. **Stripe**: A platform for online payment processing.
6. **Strapi**: A headless CMS (Content Management System) for managing application content.
7. **React Formik**: A form library for React that helps with form validation.
8. **Unsplash**: A service for accessing high-quality photos.

## Instructions for Running the Project

### 1. WebSocket Server
- Navigate to the `websocket-server` directory.
- Run `npm install` to install dependencies.
- Run `npm start` to start the WebSocket server.

### 2. AdminChat
- Navigate to the `adminchat` directory.
- Run `npm install` to install dependencies.
- Run `npm start` to start the development server for the AdminChat application.

### 3. Client
- Navigate to the `client` directory.
- Run `npm install` to install dependencies.
- Modify the `.env` file with necessary environment variables.
- Run `npm start` to start the development server for the client application.

### 4. Strapi Server
- Navigate to the `strapi-server` directory.
- Run `npm install` to install dependencies.
- Run `npm run develop` to start the Strapi server.

## Additional Notes
- Ensure all necessary environment variables are properly configured.
- Make sure to have appropriate permissions and access rights for managing content on the Strapi server.
- This README assumes familiarity with basic web development concepts, JavaScript, React, and npm.

## Contributors
- [Tevin Munene](https://github.com/ittstevin)

## License
This project is licensed under the [MIT License](LICENSE).
