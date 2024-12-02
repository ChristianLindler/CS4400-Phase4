# Business Supply GUI
---
# Setup Instructions
This assumes you have a local MySQL server running with a working BusinessSupply Database
### Setup Front End
1. Ensure Node.js and NPM are installed on your system
2. Go to CS4400-PHASE4/BusinessSupplyGUI in the terminal
3. Run "npm install" to get all of the packages
4. Type "npm run dev" to start up a local instance of the front end
5. The terminal will give you a link (something like http://localhost:5173/) which will show the front end when clicked

### Setup Back End
1. Ensure you're using a python environment > 3.8 with flask, flask-cors, and mysql-connector-python
2. Update DB_CONFIG inside of app.py with the details for your mySql server
3. Go to CS4400-PHASE4/Backend in the terminal
4. Start the server with "python app.py"

### Run
With both the front end and backend running, you should now be free to use views and procedures from the front end with dynamic responses in the MySQL server.

---
# Explanation of Technologies
- Flask: Used as the backend framework to build and expose RESTful APIs. Its simplicity and flexibility allowed for seamless integration with MySQL and rapid development of business logic.
- MySQL: Served as the relational database to store and query data efficiently. Stored procedures and views in MySQL enhanced the application's modularity and performance.
- Flask-CORS: Enabled secure cross-origin communication between the backend and the React frontend, ensuring smooth interaction while maintaining security.
- React: Used to create a dynamic and user-friendly frontend for the application. Its component-based architecture facilitated reusable UI elements, improving development efficiency and user experience.

---
# Distribution of Work
- Christian:
- Chance:
- Sebastian:
- Owen:
