WELCOME TO OFFICE CHEF

A recipe management program built to help chefs manage their recipe books from the kitchen

The goal of this program is to offer a simple structured way to create/edit and read recipes for a professional kitchen

With Office Chef you will be able to

1. Create recipes wtih a simple text form

2. Update recipes quickly and easily

3. Read from a simple recipe page

4. Navigate through your database with a sortable table and a search filter

---

The server will run off port 3001

The client will run of port 3000

The database used is mysql, I've linked it with Node.js using mysql2 and sequelize.

---

The model will create a 'recipes' and a 'users' table
You can sign up with a link off the login page

I recommend you start with 'add a recipe', then move onto the recipe table to see how it functions

---

Link to git Repository
https://github.com/Chrisbkyle/Capstone-Project

When you pull off git all you need to do is

1. Navigate to 'client', run npm install

2. Navigate to 'server', run npm intall

3. Create a new .env file in the 'server file' and populate with
   DB_HOST=
   DB_PORT=
   DB_USER=
   DB_PASSWORD=
   DB_NAME='office_chef'
   Add in details of your local mySQL connection to use

4. Navigate to 'client', run npm start

5. Navigate to 'server', run nodemon index.js
