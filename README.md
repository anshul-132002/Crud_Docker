# 🚀 CRUD Application with React, Node.js, Express, and MongoDB

Welcome to the **CRUD Application**! This project is a full-stack web application that demonstrates essential Create, Read, Update, and Delete (CRUD) operations using modern web technologies. The application is containerized with Docker for easy deployment and integrates Jenkins for CI/CD automation. 🎉

## 🌟 Features

- **✨ Intuitive UI:** A user-friendly interface built with React.js for seamless CRUD operations.
- **⚙️ Robust Backend:** A RESTful API powered by Node.js and Express.js.
- **💾 Persistent Storage:** Data management using MongoDB for efficient and secure storage.
- **🐳 Dockerized Setup:** Fully containerized application using Docker and Docker Compose.
- **🔧 Jenkins Integration:** Automated CI/CD pipeline with Jenkins for smooth development workflows.

## 📋 Prerequisites

Make sure you have the following installed before starting:

- [Node.js](https://nodejs.org/) (v14 or later) 🟢
- [Docker](https://www.docker.com/) 🐋
- [MongoDB](https://www.mongodb.com/) (if not using Docker) 🗄️

## 🚀 Getting Started

To get the application up and running locally, follow these steps:

1. **Clone the repository** 📂

   ```bash
   git clone https://github.com/your-username/crud-app.git
   cd crud-app
   ```

## Install dependencies 📦

```For the backend:
cd server
npm install
```

```For the frontend:

cd ../client
npm install
Set up environment variables 🌐

```
Create a .env file in the server directory with the following environment variables:
```
env
Copy code
PORT=3000
MONGO_URI=mongodb://mongo:27017/crud-db
Build and start the containers 🏗️
```
Make sure you’re in the root of the project directory, then run:
```
Copy code
docker-compose up --build
Access the application 🌐

```
