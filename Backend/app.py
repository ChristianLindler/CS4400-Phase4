# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# MySQL connection settings
DB_CONFIG = {
    'user': 'root',
    'password': '*****',
    'host': 'localhost',
    'port': 3306,
    'database': 'business_supply',
}

# Function to get a MySQL connection
def get_db_connection():
    connection = mysql.connector.connect(**DB_CONFIG)
    return connection

# =========================== Procedures ==============================
@app.route('/api/add_owner', methods=['POST'])
def add_owner():
    cursor = None
    conn = None
    try:
        # Get data from the request
        username = request.json['username']
        first_name = request.json['first_name']
        last_name = request.json['last_name']
        address = request.json['address']
        birthdate = request.json['birthdate']
        
        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to add an owner
        cursor.callproc('add_owner', [username, first_name, last_name, address, birthdate])
        conn.commit()

        return jsonify({"message": "Owner added successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()


@app.route('/api/add_employee', methods=['POST'])
def add_employee():
    cursor = None
    conn = None
    try:
        # Get data from the request
        username = request.json['username']
        first_name = request.json['first_name']
        last_name = request.json['last_name']
        address = request.json['address']
        birthdate = request.json['birthdate']
        tax_id = request.json['taxID']
        hired = request.json['hired']
        employee_experience = request.json['employee_experience']
        salary = request.json['salary']
        
        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to add an employee
        cursor.callproc('add_employee', [username, first_name, last_name, address, birthdate, 
                                         tax_id, hired, employee_experience, salary])
        conn.commit()

        return jsonify({"message": "Employee added successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()



@app.route('/api/add_driver_role', methods=['POST'])
def add_driver_role():
    cursor = None
    conn = None
    try:
        # Get data from the request
        username = request.json['username']
        license_id = request.json['licenseID']
        license_type = request.json['license_type']
        driver_experience = request.json['driver_experience']
        
        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to add a driver role
        cursor.callproc('add_driver_role', [username, license_id, license_type, driver_experience])
        conn.commit()

        return jsonify({"message": "Driver role added successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()


@app.route('/api/add_worker_role', methods=['POST'])
def add_worker_role():
    cursor = None
    conn = None
    try:
        # Get data from the request
        username = request.json['username']
        
        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to add a worker role
        cursor.callproc('add_worker_role', [username])
        conn.commit()

        return jsonify({"message": "Worker role added successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/add_product', methods=['POST'])
def add_product():
    cursor = None
    conn = None
    try:
        # Get data from the request
        barcode = request.json['barcode']
        name = request.json['name']
        weight = request.json['weight']

        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to add a product
        cursor.callproc('add_product', [barcode, name, weight])
        conn.commit()

        return jsonify({"message": "Product added successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/add_van', methods=['POST'])
def add_van():
    cursor = None
    conn = None
    try:
        # Get data from the request
        van_id = request.json['id']
        tag = request.json['tag']
        fuel = request.json['fuel']
        capacity = request.json['capacity']
        sales = request.json['sales']
        driven_by = request.json['driven_by']

        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to add a van
        cursor.callproc('add_van', [van_id, tag, fuel, capacity, sales, driven_by])
        conn.commit()

        return jsonify({"message": "Van added successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()


@app.route('/api/add_business', methods=['POST'])
def add_business():
    cursor = None
    conn = None
    try:
        # Get data from the request
        long_name = request.json['long_name']
        rating = request.json['rating']
        spent = request.json['spent']
        location = request.json['location']
        
        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to add a business
        cursor.callproc('add_business', [long_name, rating, spent, location])
        conn.commit()

        return jsonify({"message": "Business added successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()


@app.route('/api/add_service', methods=['POST'])
def add_service():
    cursor = None
    conn = None
    try:
        # Get data from the request
        service_id = request.json['id']
        long_name = request.json['long_name']
        home_base = request.json['home_base']
        manager = request.json['manager']
        
        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to add a service
        cursor.callproc('add_service', [service_id, long_name, home_base, manager])
        conn.commit()

        return jsonify({"message": "Service added successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()


@app.route('/api/add_location', methods=['POST'])
def add_location():
    cursor = None
    conn = None
    try:
        # Get data from the request
        label = request.json['label']
        x_coord = request.json['x_coord']
        y_coord = request.json['y_coord']
        ip_space = request.json['ip_space']
        
        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to add a location
        cursor.callproc('add_location', [label, x_coord, y_coord, ip_space])
        conn.commit()

        return jsonify({"message": "Location added successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/start_funding', methods=['POST'])
def start_funding():
    cursor = None
    conn = None
    try:
        # Get data from the request
        owner = request.json['owner']
        amount = request.json['amount']
        long_name = request.json['long_name']
        fund_date = request.json['fund_date']
        
        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to start funding
        cursor.callproc('start_funding', [owner, amount, long_name, fund_date])
        conn.commit()

        return jsonify({"message": "Funding started successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/hire_employee', methods=['POST'])
def hire_employee():
    cursor = None
    conn = None
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
    cursor = None
    conn = None
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


@app.route('/api/manage_service', methods=['POST'])
def manage_service():
    cursor = None
    conn = None
    try:
        # Get data from the request
        username = request.json['username']
        service_id = request.json['id']
        
        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to manage a service
        cursor.callproc('manage_service', [username, service_id])
        conn.commit()

        return jsonify({"message": "Service managed successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/takeover_van', methods=['POST'])
def takeover_van():
    cursor = None
    conn = None
    try:
        # Get data from the request
        username = request.json['username']
        van_id = request.json['id']
        tag = request.json['tag']

        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to take over a van
        cursor.callproc('takeover_van', [username, van_id, tag])
        conn.commit()

        return jsonify({"message": "Van takeover successful!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/refuel_van', methods=['POST'])
def refuel_van():
    cursor = None
    conn = None
    try:
        # Get data from the request
        van_id = request.json['id']
        tag = request.json['tag']
        more_fuel = request.json['more_fuel']

        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to refuel the van
        cursor.callproc('refuel_van', [van_id, tag, more_fuel])
        conn.commit()

        return jsonify({"message": "Van refueled successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/load_van', methods=['POST'])
def load_van():
    cursor = None
    conn = None
    try:
        # Get data from the request
        van_id = request.json['id']
        tag = request.json['tag']
        barcode = request.json['barcode']
        more_packages = request.json['more_packages']
        price = request.json['price']

        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to load a van
        cursor.callproc('load_van', [van_id, tag, barcode, more_packages, price])
        conn.commit()

        return jsonify({"message": "Van loaded successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/drive_van', methods=['POST'])
def drive_van():
    cursor = None
    conn = None
    try:
        # Get data from the request
        van_id = request.json['id']
        tag = request.json['tag']
        destination = request.json['destination']

        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to drive the van
        cursor.callproc('drive_van', [van_id, tag, destination])
        conn.commit()

        return jsonify({"message": "Van driven to destination successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/purchase_product', methods=['POST'])
def purchase_product():
    cursor = None
    conn = None
    try:
        # Get data from the request
        long_name = request.json['long_name']
        product_id = request.json['id']
        tag = request.json['tag']
        barcode = request.json['barcode']
        quantity = request.json['quantity']

        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to purchase a product
        cursor.callproc('purchase_product', [long_name, product_id, tag, barcode, quantity])
        conn.commit()

        return jsonify({"message": "Product purchased successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/remove_product', methods=['POST'])
def remove_product():
    cursor = None
    conn = None
    try:
        # Get data from the request
        barcode = request.json['barcode']

        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to remove a product
        cursor.callproc('remove_product', [barcode])
        conn.commit()

        return jsonify({"message": "Product removed successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/remove_van', methods=['POST'])
def remove_van():
    cursor = None
    conn = None
    try:
        # Get data from the request
        van_id = request.json['id']
        tag = request.json['tag']

        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to remove a van
        cursor.callproc('remove_van', [van_id, tag])
        conn.commit()

        return jsonify({"message": "Van removed successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/api/remove_driver_role', methods=['POST'])
def remove_driver_role():
    cursor = None
    conn = None
    try:
        # Get data from the request
        username = request.json['username']

        # Establish connection
        conn = get_db_connection()
        cursor = conn.cursor()

        # Call the stored procedure to remove the driver role
        cursor.callproc('remove_driver_role', [username])
        conn.commit()

        return jsonify({"message": "Driver role removed successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()



# ============================== VIEWS ================================
@app.route('/api/display_employee_view', methods=['GET'])
def get_display_employee_view():
    cursor = None
    conn = None
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

@app.route('/api/display_driver_view', methods=['GET'])
def get_display_driver_view():
    cursor = None
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM display_driver_view;')
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

@app.route('/api/display_location_view', methods=['GET'])
def get_display_location_view():
    cursor = None
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM display_location_view;')
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

@app.route('/api/display_owner_view', methods=['GET'])
def get_display_owner_view():
    cursor = None
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM display_owner_view;')
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

@app.route('/api/display_product_view', methods=['GET'])
def get_display_product_view():
    cursor = None
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM display_product_view;')
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

@app.route('/api/display_service_view', methods=['GET'])
def get_display_service_view():
    cursor = None
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM display_service_view;')
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
