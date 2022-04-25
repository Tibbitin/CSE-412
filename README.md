# User Manual
NOIR Games is a web application that allows users to interact with a gaming catalogue. This includes having a dashboard, a store, and a login system. There are two components within this documentation:

1. [Setup and Installation](#Setup-and-Installation)
2. [Walkthrough and Navigation](#Walkthrough-and-Navigation)

# Setup and Installation
This step will go through installing the neccesary applications and packages/dependencies that are needed to run Noir Games. In addition, this section will also show how to setup the database.

### Applications
* Visual Studio Code
* pgAdmin 4

To download Visual Studio Code, visit this link and download the software based on your operating system: https://code.visualstudio.com/download

To download pgAdmin 4, visit this link and download the software based on your operating system: https://www.pgadmin.org/download/

### Packages/Dependencies
Install the following software in order:
* PostgreSql
* Node.js
* EXPRESS 
* React
* React-router-dom

To install PostgreSql, visit this link and download the software based on your operating system: https://www.postgresql.org/download/

To install Node.js, visit this link and download the software based on your operating system: https://nodejs.org/en/download/

To install EXPRESS, run the following command in your console/terminal window: 

<code>npm install express</code>

To install React, run the following command in your console/terminal window:

<code>npm install react</code>

To install React-router-dom, run the following command in your console/terminal window:

<code>npm install react-router-dom</code>

### Cloning the Repository
To clone the repository, run the following command in your console/terminal window:

<code>git clone https://github.com/Tibbitin/CSE-412.git</code>

### Setting up the Database
1. Open pgAdmin 4
2. Create a password
3. Open Servers -> PostgreSQL -> Databases
4. Right click on Database, then open Create -> Database...
5. Name the database, select "Save"
6. Right click on your database and select "PSQL Tool"
7. Run this command under "PSQL Tool" <code> CREATE EXTENSION "uuid-ossp"; </code>
8. Right click on your database and select "Query Tool"
9. Wherever you cloned the repository, open the file "middlePhase.pgsql" using the Visual Studio Code IDE
10. Copy and paste all commands in that file and paste it onto the "Query Tool" in pgAdmin 4.
11. Execute the commands in the "Query Tool"




# Walkthrough and Navigation
### Log in:
The user is able to view the landing screen once the setup is complete and the application has been run. The landing page is the sign in page, where the user must enter their username and password in order to log in to their account. Pressing the submit button with a valid username and password takes you to the dashboard, which is the “My Games” page, that displays all the games the user has.
![1](https://user-images.githubusercontent.com/78890952/165027133-c27813f6-0d9d-4143-9272-042f34f7349b.PNG)


### Register:
If the user does not have an account, they are able to click the register link in order to create an account. To create an account, the user must enter a username and a password and click the Register button. This will create their account and take them to the dashboard, which is the “My Games” page which will be blank since they don’t have any games yet.
![2](https://user-images.githubusercontent.com/78890952/165027233-5f47f440-313b-40a0-9ca2-54cd7397b3f9.PNG)

### Dashboard:
On the dashboard, the user can view all games that are in their wishlist. 

### Store:
The store page has all the games available in the store. There is a search bar at the top of the page that allows you to search for a specific game based on the title. In order to filter the list of games based on genre or rating, you can use the buttons on the side and the games that match the criteria will remain on the page. In order to add a game to your wishlist, you simply have to press the “+” button beside the game, which will add a copy of it to the “My Games” page. 

### Nav bar:
Clicking the “Store” button takes you to the store page. Clicking the “My Games” button takes you to the dashboard. Clicking the “Sign In” page takes you to the login page.

![3](https://user-images.githubusercontent.com/78890952/165027244-8ffbf2be-7af9-4cba-8f0d-874e9ff92ee6.PNG)


### Stopping the application:
In order to end the application, simply close the tab on your browser.
