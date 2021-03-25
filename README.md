# techBlog

## Description
The goal of this project is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## Installation

### Install dependencies:

npm init

npm install

npm install express-handlebars

npm install --save mysql2

npm i sequelize

npm install dotenv

npm install bcrypt

npm install express-session

npm install connect-session-sequelize

## Offline (localhost)

### Run MySQL

mysql -u USERNAME - p 

mysyql> source schema.sql; 

mysyql> tech_blog_db;

mysyql> quit;

### Seed the table

npm run seed

### Modify .env file

DB_NAME='tech_blog_db'

DB_USER='' <- Enter MySQL username

DB_PW='' <- Enter MySQL password

## Links

Heroku link: https://tanb-tech-blog.herokuapp.com/

Repo link: https://github.com/bctan87/techBlog

## Credits 

https://www.w3schools.com/

https://developer.mozilla.org/en-US/

https://htmlcheatsheet.com/js/

https://stackoverflow.com/

https://codepen.io/

https://leetcode.com

https://eloquentjavascript.net/

https://www.udemy.com/course/advanced-javascript-concepts/

https://medium.com/javascript-in-plain-english/the-20-most-popular-programming-articles-of-2020-289d22fbd35e

https://nodejs.org/en/download/

https://www.npmjs.com/package/mysql2

https://www.npmjs.com/package/sequelize

https://www.npmjs.com/package/dotenv

https://www.npmjs.com/package/express-handlebars

https://www.npmjs.com/package/bcrypt

https://www.npmjs.com/package/express-session

https://www.npmjs.com/package/connect-session-sequelize

https://materializecss.com/ 