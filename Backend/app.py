# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# MySQL connection settings
DB_CONFIG = {
    'user': 'root',
    'password': '****',
    'host': 'localhost',
    'port': 3306,
    'database': 'business_supply',
}

# Function to get a MySQL connection
def get_db_connection():
    connection = mysql.connector.connect(**DB_CONFIG)
    return connection

# =========================== Procedures ==============================
@app.route('/api/hire_employee', methods=['POST'])
def hire_employee():
    try:
        # Get data from the request
        username = request.json['username']
        id = request.json['id']

        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure for hiring
        cursor.callproc('hire_employee', [username, id])
        conn.commit()

        return jsonify({"message": "Employee hired successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/fire_employee', methods=['POST'])
def fire_employee():
    try:
        # Get data from the request
        username = request.json['username']
        id = request.json['id']

        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure for firing
        cursor.callproc('fire_employee', [username, id])
        conn.commit()

        return jsonify({"message": "Employee fired successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()



# ============================== VIEWS ================================
@app.route('/api/display_employee_view', methods=['GET'])
def get_display_owner_view():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM display_employee_view;')
        rows = cursor.fetchall()

        return jsonify(rows)

    except Exception as e:
        print('Error')
        return jsonify({"error": str(e)}), 500
    
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

if __name__ == '__main__':
    app.run(debug=True, port=5000)
