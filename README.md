
#  Task Manager App

A full-stack Task Manager built using the **MERN stack** (MongoDB, Express, React, Node.js) with user authentication, task CRUD operations, and a responsive UI.

---

##  Tech Stack

- **Frontend**: React, Axios, React Router, Context API
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT + bcrypt

---

## Features

- Register/Login with JWT authentication
-  Create, Read, Update, and Delete tasks
- Mark tasks as complete/incomplete
-  Tasks are user-specific
-  Protected routes using React Context
-  Responsive UI with React

---

##  Folder Structure

task-manager-app/ │ ├── backend/ │   ├── models/ │   ├── routes/ │   ├── middleware/ │   └── server.js │ └── frontend/ └── src/ ├── pages/ ├── components/ ├── context/ └── App.js

---

##  Local Setup Instructions

###  Clone the Repository

```bash
git clone https://github.com/bhardwajsimran/task-manager-app.git
cd task-manager-app


---

 Backend Setup

cd backend
npm install

Create a .env file in backend/:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Then run the server:

node server.js
# or
npx nodemon server.js


---

 Frontend Setup

cd ../frontend
npm install
npm start

---

