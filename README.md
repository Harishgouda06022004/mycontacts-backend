# mycontacts-backend
 MyContacts Backend is a RESTful API built with Node.js, Express, and MongoDB, designed for managing user-specific contact information. It includes features like user authentication (JWT-based), secure CRUD operations for contacts, and robust error handling. Ideal for learning or as a starting point for contact management applications!
## Features

- User registration and login with hashed passwords.
- JWT-based authentication for secure access.
- Create, read, update, and delete contacts.
- RESTful API structure.
- Error handling and input validation.
- Role-based access control for user-specific data.

---

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Postman](https://www.postman.com/) (optional, for testing APIs)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mycontacts-backend.git
   cd mycontacts-backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following variables:

env
Copy code
PORT=5500
MONGO_URI=your_mongo_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret
Start the development server:

bash
Copy code
npm run dev
API Endpoints
Authentication
Register User
URL: /api/users/register
Method: POST
Body:
json
Copy code
{
  "username": "example",
  "email": "example@gmail.com",
  "password": "yourpassword"
}
Login User
URL: /api/users/login
Method: POST
Body:
json
Copy code
{
  "email": "example@gmail.com",
  "password": "yourpassword"
}
Get Current User
URL: /api/users/current
Method: GET
Headers:
json
Copy code
{
  "Authorization": "Bearer <your_token>"
}
Contacts
Get All Contacts
URL: /api/contacts
Method: GET
Headers:
json
Copy code
{
  "Authorization": "Bearer <your_token>"
}
Create a New Contact
URL: /api/contacts
Method: POST
Headers:
json
Copy code
{
  "Authorization": "Bearer <your_token>"
}
Body:
json
Copy code
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890"
}
Get a Single Contact
URL: /api/contacts/:id
Method: GET
Headers:
json
Copy code
{
  "Authorization": "Bearer <your_token>"
}
Update a Contact
URL: /api/contacts/:id
Method: PUT
Headers:
json
Copy code
{
  "Authorization": "Bearer <your_token>"
}
Body:
json
Copy code
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "phone": "0987654321"
}
Delete a Contact
URL: /api/contacts/:id
Method: DELETE
Headers:
json
Copy code
{
  "Authorization": "Bearer <your_token>"
}
Project Structure
plaintext
Copy code
mycontacts-backend/
├── controllers/
│   ├── contactController.js
│   └── userController.js
├── models/
│   ├── contactModel.js
│   └── userModel.js
├── routes/
│   ├── contactRoutes.js
│   └── userRoutes.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── .env
├── server.js
└── package.json
Scripts
npm run dev: Start the development server with nodemon.
npm start: Start the production server.
Technologies Used
Node.js
Express.js
MongoDB (Mongoose)
JSON Web Tokens (JWT)
Bcrypt.js (for password hashing)
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
License
This project is licensed under the MIT License.

Contact
For questions or feedback, please reach out at your-email@example.com.

javascript
Copy code

Replace placeholders such as `your-username`, `your_mongo_connection_string`, `your_jwt_secret`, and `your-email@example.com` with the appropriate information for your project.
