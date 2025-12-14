# Quick Start Guide - Testing Locally

This guide will help you quickly run the SkyWings Airlines application locally with demo data before uploading to GitHub.

## ⚡ Quick Start (5 minutes)

### 1. Verify Prerequisites
Make sure you have:
- ✅ Node.js v14+ installed ([Download](https://nodejs.org/))
- ✅ MySQL Server running ([Download](https://dev.mysql.com/downloads/mysql/))
  - Windows: `services.msc` → start MySQL80 service
  - Linux/Mac: `brew services start mysql`

### 2. Navigate to Backend
```bash
cd backend
```

### 3. Verify/Update Configuration
Edit `backend/.env` file and make sure your MySQL password is correct:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password  # ← Update this with YOUR password
DB_NAME=skywings_airlines
PORT=3000
NODE_ENV=development
JWT_SECRET=skywings-secret-key-change-in-production
```

### 4. Run Setup Script (Automated)
This will install dependencies, create database, and load demo data:
```bash
node setup.js
```

**OR** Follow manual steps below:

---

## 📋 Manual Setup Steps

If the automated setup doesn't work, follow these steps:

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

### Step 2: Create Database
```bash
# Windows (PowerShell)
mysql -u root -p < database\schema.sql

# Linux/Mac (Terminal)
mysql -u root -p < database/schema.sql
```
When prompted, enter your MySQL root password.

### Step 3: Load Demo Data
```bash
node src/scripts/initialize_database.js
```

### Step 4: Start the Server
```bash
# Development (with auto-reload)
npm run dev

# Or production mode
npm start
```

You should see:
```
✅ Database connected successfully
🚀 SkyWings Airlines server running on http://localhost:3000
```

---

## 🧪 Testing the Application

### Access the Application
Open your browser and go to:
```
http://localhost:3000
```

### Login with Demo Credentials

**Regular User:**
- Email: `user@skywings.com`
- Password: `user123`

**Admin User:**
- Email: `admin@skywings.com`
- Password: `admin123`

### Test Features
1. **Login** - Try login with above credentials
2. **Search Flights** - Find available flights
3. **Make Booking** - Book a flight
4. **My Bookings** - View your bookings
5. **Check-in** - Check-in for your flight
6. **Admin Dashboard** - Login as admin and manage system
7. **Admin Reports** - View flight reports

---

## 🔌 API Testing

Test the API endpoints with curl or Postman:

### Health Check
```bash
curl http://localhost:3000/api/health
```

### Search Flights
```bash
curl "http://localhost:3000/api/flights/search?source=NYC&destination=LAX&date=2025-12-20"
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@skywings.com","password":"user123"}'
```

---

## ⚠️ Troubleshooting

### MySQL Connection Error
**Error:** `connect ECONNREFUSED 127.0.0.1:3306`

**Solution:**
1. Ensure MySQL is running
2. Check `.env` password matches your MySQL root password
3. Try connecting manually:
   ```bash
   mysql -u root -p
   ```

### Port 3000 Already in Use
**Error:** `listen EADDRINUSE: address already in use :::3000`

**Solution:**
1. Find process using port 3000:
   ```bash
   netstat -ano | findstr :3000
   ```
2. Kill the process:
   ```bash
   taskkill /PID <PID> /F
   ```
3. Or change PORT in `.env` file

### Database Not Found
**Error:** `Unknown database 'skywings_airlines'`

**Solution:**
1. Manually create the database:
   ```bash
   mysql -u root -p < database/schema.sql
   ```
2. Then run initialization:
   ```bash
   node src/scripts/initialize_database.js
   ```

### npm install Fails
**Error:** `npm ERR! code ...`

**Solution:**
1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```
2. Delete `node_modules` and `package-lock.json`:
   ```bash
   rmdir /s node_modules
   del package-lock.json
   npm install
   ```

---

## 📊 Database Information

### Default Test Data
After setup, the database contains:
- **Airlines**: 3 airlines (Air Pakistan, Emirates, Qatar Airways)
- **Flights**: 12 sample flights with routes like NYC-LAX, NYC-LHR, etc.
- **Users**: Admin and regular user accounts
- **Sample Bookings**: Existing bookings for testing

### Database Schema
Located in `database/schema.sql`:
- Users table with auth credentials
- Flights table with flight information
- Bookings table for reservations
- Check-ins table for boarding passes
- Reports table for analytics

---

## 🚀 Ready to Upload to GitHub?

After testing locally:
1. ✅ Verify all features work
2. ✅ Note any issues
3. ✅ Update README with any findings
4. ✅ Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit with demo data"
   git push origin main
   ```

---

## 📞 Need Help?

If you encounter issues:
1. Check the **Troubleshooting** section above
2. Verify MySQL is running
3. Check `.env` configuration
4. Review logs in terminal output
5. Check backend routes in `src/routes/`

---

**Last Updated**: December 2025
