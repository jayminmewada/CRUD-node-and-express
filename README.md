CRUD Application with Node.js, Express, and MongoDB

This is a CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MongoDB. It allows you to perform basic CRUD operations on a collection of data stored in MongoDB.

Features

	•	Create new records
	•	Read existing records
	•	Update existing records
	•	Delete records

Installation and Setup

	1.	Clone this repository to your local machine.
	2.	Install the required npm packages:

npm install

	3.	Make sure you have MongoDB installed and running on your machine.
	4.	Set up your MongoDB connection details in the config.js file.
	5.	Start the Node.js server:

npm start

	6.	The server will be running on http://localhost:3000.

API Endpoints

	•	GET /api/data: Get all records.
	•	GET /api/data/:id: Get a single record by ID.
	•	POST /api/data: Create a new record.
	•	PUT /api/data/:id: Update a record by ID.
	•	DELETE /api/data/:id: Delete a record by ID.


Configuration

	•	MongoDB Connection: Update the MongoDB connection details in the config.js file.
	•	Port: The server runs on port 3000 by default. You can change it in the server.js file.

Technologies Used

	•	Node.js: JavaScript runtime environment
	•	Express.js: Web application framework for Node.js
	•	MongoDB: NoSQL database for data storage

License

MIT License

Author

Jaymin Mewada

Feel free to customize the README file with more details about your application, such as usage examples, additional features, or deployment instructions. Let me know if you need further assistance!
