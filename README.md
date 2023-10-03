

##  _Project Description_ ##

PROJECT DESCRIPTION

Creating a simple Nodejs/Express REST API for Reminder App.

REST API

- REST stands for Representational State Transfer, and REST API (Application Programming Interface) is a way of implementing web services in a standard and flexible way that adheres to the principles of REST.

- A REST API is a web-based API that uses HTTP methods like GET, POST, PUT, DELETE, etc. to access and manipulate resources that are identified by URIs (Uniform Resource Identifiers).

Applications to install:
- MongoDB Server
- NodeJS
- MongoDB Compass
- PostMan

- MongoDB Server 
- MongoDB Server is a popular open-source NoSQL database server that stores data in flexible, document-based structures instead of traditional relational tables. MongoDB is designed to handle large volumes of data, and it provides a powerful and flexible way to store and manage data in a variety of different formats.

- NodeJS
- Node.js is a runtime environment that allows developers to run JavaScript code on the server-side. It is built on top of the V8 JavaScript engine that powers Google Chrome, and it provides a set of APIs for building scalable and high-performance server-side applications.

- MongoDB Compass 
- MongoDB Compass is a graphical user interface (GUI) tool that allows developers to interact with MongoDB databases. It provides a visual way to explore and manipulate data, making it easier for developers to manage their databases.

- Postman
- MongoDB Server is a popular open-source NoSQL database server that stores data in flexible, document-based structures instead of traditional relational tables. MongoDB is designed to handle large volumes of data, and it provides a powerful and flexible way to store and manage data in a variety of different formats.

How to run on Terminal?

- Type "npm start"

The proect has 4 folders:
- controllers
- - reminder-controller.js
- models
- - index.js
- - reminder.js
- routes
- - index.js
- - reminder-route.js
- services
- - reminder-services.js
- server.js
-app.js

- In reminder-controller.js we export methods post,index,updaterem,removerem,find
- In reminder.js we define schema of data
- In reminder-route.js method we define post,get,delete,put
- In reminder-service.js we define update,search,save,remove,get methods 

The project has dependencies like express,cors,mongoose,debug

- In this Assignement we implement crud functionalities using restapi,postman
- POST function is used to create new data
- GET function is used to fetch all the data from the database
- PUT function is used to update the data
- DELETE function is used to delete the data from db.




