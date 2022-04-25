# User Manual
Noir Games is a web application that allows users to interact with a gaming catalogue. This includes having a dashboard, a store, and a login system. There are two components within this documentation:

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
