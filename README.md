# E-Commerce App: Back-End
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents:
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Challenges](#challenges)
- [Contributions](#contributions)
- [License](#license)

## Description
An app that builds the back end of an e-commerce site  by modifying starter code. The app will configure a working Express.js API and use Sequelize to interact with a MySQL database.

## Installation:
To get the app up and running, follow these steps:
1. Download the source code.
2. Navigate to your CLI and run `npm install` to install the necessary scripts and dependencies.
3. Run `mysql -u root -p` to open the MySQL shell and login using your credentials.
4. Run the following commands to set up and seed the database `SOURCE db/schema.sql`.
5. Exit the MySQL shell by typing `exit`.
6. Run the following command to seed the database and start the app `npm run seed && npm run watch`.
7. Open Insomnia, or an similar program, to test the API routes, making sure they return the required data.
8. End the session in the CLI by using the keyboard command `CTRL+C`.

## Usage:
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
[Video Demo](https://drive.google.com/file/d/1lgidwQ1XGfaO4hI9y378Rk47wtyWZ1fA/view)

## Challenges:
Currently, the POST routes to add categories, products, and tags are not functioning. All return a 400 error. I will continue to work on this issue at a later date.

## Contributions:
This app was created in conjuction with the coding boot camp program at the University of Kansas. Please contact me, Rebecca, directly for guidelines.
- [Rebecca Lehew](https://github.com/rebeccalehew)

## License:
Licensed under the [MIT](https://opensource.org/licenses/MIT) license.
