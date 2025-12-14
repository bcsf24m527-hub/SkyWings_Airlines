# SkyWings Airlines - Flight Booking System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A complete flight booking system built with **Node.js**, **Express**, **MySQL**, and **vanilla JavaScript**. This full-stack application provides comprehensive airline booking platform functionality with user authentication, flight search, booking management, check-in, and admin dashboard.

## ✨ Features

- 🔐 **User Authentication** - Secure login and registration with JWT tokens
- ✈️ **Flight Search & Booking** - Search flights and manage bookings
- 📋 **Check-in System** - Online check-in with seat selection
- 👤 **User Profile** - Manage personal information and preferences
- 📊 **Admin Dashboard** - Comprehensive admin panel with reports and user management
- 🛡️ **Role-based Access Control** - Different permissions for users and admins
- 📱 **Responsive Design** - Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL 8.0+
- **Authentication**: JWT (JSON Web Tokens), bcryptjs
- **Server**: Standalone MySQL Server (not XAMPP)

## 📋 Prerequisites

- **Node.js** v14 or higher - [Download](https://nodejs.org/)
- **MySQL Server** v8.0 or higher - [Download](https://dev.mysql.com/downloads/mysql/)
  - ⚠️ **Important**: Uses standalone MySQL Server (not XAMPP MySQL)
  - Ensure MySQL Server is running as a Windows service

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the repository
git clone <repository-url>
cd skywings-airlines
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Edit .env with your MySQL credentials
```

### 3. Database Setup

```bash
# In the backend folder
mysql -u root -p < database/schema.sql

# Initialize the database
node src/scripts/initialize_database.js
```

### 4. Start the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
skywings-airlines/
├── backend/                         # Backend Node.js/Express server
│   ├── src/
│   │   ├── config/                 # Database configuration
│   │   ├── routes/                 # API routes
│   │   ├── middleware/             # Authentication middleware
│   │   └── scripts/                # Database initialization scripts
│   ├── database/
│   │   └── schema.sql              # Database schema
│   ├── server.js                   # Main Express server
│   ├── package.json                # Backend dependencies
│   ├── .env.example                # Environment variables template
│   └── .env                        # Local environment (not in git)
│
├── frontend/                        # Frontend HTML/CSS/JS
│   └── public/
│       ├── css/                    # Stylesheets
│       ├── js/                     # JavaScript files
│       ├── images/                 # Assets
│       ├── index.html
│       ├── login.html
│       ├── register.html
│       ├── user-dashboard.html
│       ├── user-profile.html
│       ├── my-bookings.html
│       ├── check-in.html
│       ├── flight-search.html
│       ├── about-contact.html
│       ├── admin-dashboard.html
│       ├── admin-management.html
│       └── admin-reports.html
│
├── README.md                        # This file
├── .gitignore                       # Git ignore rules
└── LICENSE                          # MIT License
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Flights
- `GET /api/flights/search` - Search flights
- `GET /api/flights/:id` - Get flight details

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/user/:userId` - Get user bookings
- `DELETE /api/bookings/:id` - Cancel booking

### Check-in
- `POST /api/checkin` - Check-in passenger
- `GET /api/checkin/:bookingId` - Get check-in details

### User Profile
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Admin
- `GET /api/admin/users` - List all users
- `GET /api/admin/flights` - List all flights
- `PUT /api/admin/flights/:id` - Update flight
- `DELETE /api/admin/flights/:id` - Delete flight

### Reports
- `GET /api/reports/bookings` - Booking reports
- `GET /api/reports/revenue` - Revenue reports

## 👥 Default Test Users

After initialization, use these credentials:

- **Admin**: 
  - Email: `admin@skywings.com`
  - Password: `admin123`

- **User**: 
  - Email: `user@skywings.com`
  - Password: `user123`

## 📝 Environment Variables

Create a `.env` file in the `backend` folder:

```env
# MySQL Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=skywings_airlines

# Server Configuration
PORT=3000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your-secret-key-here
```

## 🔒 Security Notes

- ⚠️ Never commit `.env` file to Git
- Change `JWT_SECRET` to a strong random string in production
- Use HTTPS in production
- Implement rate limiting for API endpoints
- Regularly update dependencies: `npm audit fix`

## 🐛 Troubleshooting

### MySQL Connection Error
1. Ensure MySQL Server is running: `services.msc` → MySQL80
2. Verify credentials in `backend/.env`
3. Check MySQL is listening on port 3306

### Port Already in Use
```bash
# Find process using port 3000
netstat -ano | findstr :3000
# Kill the process
taskkill /PID <PID> /F
```

### Database Not Initialized
```bash
# Re-run initialization from backend folder
node src/scripts/initialize_database.js
```

## 📦 Dependencies

### Backend
- `express` - Web framework
- `mysql2` - MySQL client
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT authentication
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables
- `express-validator` - Input validation
- `nodemon` - Development auto-reload

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created as a Database Systems project at PUCIT.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Last Updated**: December 2025

For issues and questions, please create an issue in the repository.

5. **Insert Sample Data (Optional but Recommended)**
   ```bash
   node scripts/insert_comprehensive_data.js
   ```
   This will create:
   - 100+ user accounts
   - 150+ bookings distributed across users
   - 400+ passengers
   - All with realistic data

6. **Start Server**
   ```bash
   npm start
   ```

7. **Access Application**
   - Open browser: `http://localhost:3000`

## 🔐 Default Login Credentials

After running `scripts/initialize_database.js` and `scripts/insert_comprehensive_data.js`, use these credentials:

### Admin Account
- **Email:** `admin@skywings.com`
- **Password:** `admin123`
- **Access:** Full admin dashboard, manage flights, users, bookings, aircraft, reports

### Sample User Accounts

**Original Test User:**
- **Email:** `user@skywings.com`
- **Password:** `user123`

**Additional Test Users (100 users created):**
- **Email Pattern:** `user1@skywings.com` through `user100@skywings.com`
- **Password Pattern:** `user1123` through `user100123`
- Example: `user1@skywings.com` / `user1123`, `user2@skywings.com` / `user2123`, etc.

**Sample User Accounts (First 10):**
1. **John Smith** - `user1@skywings.com` / `user1123`
2. **Jane Johnson** - `user2@skywings.com` / `user2123`
3. **Michael Williams** - `user3@skywings.com` / `user3123`
4. **Sarah Brown** - `user4@skywings.com` / `user4123`
5. **David Jones** - `user5@skywings.com` / `user5123`
6. **Emily Garcia** - `user6@skywings.com` / `user6123`
7. **James Miller** - `user7@skywings.com` / `user7123`
8. **Emma Davis** - `user8@skywings.com` / `user8123`
9. **Robert Rodriguez** - `user9@skywings.com` / `user9123`
10. **Olivia Martinez** - `user10@skywings.com` / `user10123`

> **Note:** Full list of all 100 user credentials is saved in `USER_CREDENTIALS.txt` file after running the data insertion script.

## 📋 Features

### User Features
- ✅ User registration and login
- ✅ Flight search with filters (from, to, date, class)
- ✅ Flight booking with passenger details
- ✅ View and manage bookings
- ✅ Check-in functionality
- ✅ User profile management
- ✅ Booking cancellation

### Admin Features
- ✅ Admin dashboard with statistics
- ✅ Flight management (add, edit, delete flights)
- ✅ View all bookings
- ✅ User management
- ✅ System statistics and reports

## 🗂️ Project Structure

```
WEB/
├── server.js                 # Main server file
├── package.json              # Dependencies
├── .env                      # Environment variables
├── config/
│   └── database.js          # Database connection
├── middleware/
│   └── auth.js              # Authentication middleware
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── flights.js           # Flight routes
│   ├── bookings.js          # Booking routes
│   ├── checkin.js           # Check-in routes
│   ├── users.js             # User routes
│   └── admin.js             # Admin routes
├── sql/
│   └── schema.sql           # Database schema
├── scripts/
│   ├── initialize_database.js      # Password initialization
│   ├── insert_comprehensive_data.js  # Insert 100+ users and bookings
│   └── add_more_flights.js        # Add flights to reach 100+
├── css/
│   └── style.css            # Styles
├── js/
│   └── main.js              # Frontend JavaScript
└── *.html                   # HTML pages
```

## 📊 Database Statistics

After running the setup scripts, your database will contain:
- **102+ Users** (1 admin + 1 original user + 100 new users)
- **100+ Flights** (spread across different routes and dates)
- **200+ Bookings** (distributed across all users with various statuses)
- **400+ Passengers** (linked to bookings)
- **4 Aircraft** (can be expanded via admin panel)

**To populate database with sample data:**
```bash
# After initial setup, run:
node scripts/insert_comprehensive_data.js
node scripts/add_more_flights.js
```

## 🛠️ API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/check` - Check authentication
- `POST /api/auth/logout` - Logout

### Flights
- `GET /api/flights/search` - Search flights
- `GET /api/flights/:id` - Get flight details
- `GET /api/flights/status/:flightNumber` - Get flight status

### Bookings
- `POST /api/bookings/create` - Create booking (requires auth)
- `GET /api/bookings/list` - Get user bookings (requires auth)
- `GET /api/bookings/:id` - Get booking details (requires auth)
- `POST /api/bookings/:id/cancel` - Cancel booking (requires auth)

### Check-in
- `POST /api/checkin/search` - Search booking for check-in
- `POST /api/checkin/confirm` - Confirm check-in

### User Profile
- `GET /api/users/profile` - Get profile (requires auth)
- `PUT /api/users/profile` - Update profile (requires auth)
- `PUT /api/users/password` - Change password (requires auth)

### Admin (Admin only)
- `GET /api/admin/stats` - Get statistics
- `GET /api/admin/flights` - Get all flights
- `POST /api/admin/flights` - Create flight
- `PUT /api/admin/flights/:id` - Update flight
- `DELETE /api/admin/flights/:id` - Delete flight
- `GET /api/admin/bookings` - Get all bookings
- `GET /api/admin/users` - Get all users

## 🗄️ Database

### Sample Data Included
- **8 Airports:** NYC, LAX, CHI, MIA, LON, PAR, TOK, DXB
- **4 Aircraft:** Boeing 737-800, 777-300ER, Airbus A320, A350
- **8 Sample Flights** with future dates
- **Seats** for all aircraft
- **2 Default Users** (admin and regular user)

### Database Schema
The database includes tables for:
- Users (customers and admins)
- Aircraft
- Airports
- Flights
- Bookings
- Passengers
- Seats
- Check-ins
- User Preferences

## 🚨 Troubleshooting

### "Cannot connect to database"
- Ensure **MySQL Server** is running (not XAMPP MySQL)
  - Check Windows Services: `services.msc` → Look for "MySQL80" or "MySQL"
  - Or run: `Get-Service -Name "*mysql*"` in PowerShell
- Check `.env` file has correct password (or leave empty if no password)
- Verify database `skywings_airlines` exists
- Test connection: `node scripts/test_mysql_connection.js`

### "Login not working"
- Make sure you ran `node scripts/initialize_database.js`
- Check that users exist in database

### "Port 3000 already in use"
- Change PORT in `.env` file to another number (e.g., 3001)
- Restart the server

### "Flights not showing"
- Verify flights were inserted (check `flights` table)
- Check flight dates are in the future
- Ensure flights have status 'scheduled' or 'boarding'

### "Module not found" errors
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then run `npm install`

## 📝 Development Commands

```bash
# Start server (production)
npm start

# Start server with auto-reload (requires nodemon)
npm run dev

# Install dependencies
npm install
```

## 🔒 Security Notes

⚠️ **Important for Production:**

1. **Change Default Passwords:**
   - Change MySQL root password
   - Change default user passwords in database
   - Change JWT_SECRET in `.env` to a strong random string

2. **Environment Variables:**
   - Never commit `.env` file to version control
   - Use strong passwords
   - Don't share your `.env` file

3. **Database:**
   - Create a dedicated MySQL user (not root) for the application
   - Grant only necessary permissions

## 📞 Support

If you encounter issues:
1. Check error messages in terminal
2. Verify MySQL is running
3. Check `.env` configuration
4. Review database connection settings

## 📄 License

This project is open source and available for educational purposes.

---

**Made with ❤️ for SkyWings Airlines**

**Last Updated:** 2025
