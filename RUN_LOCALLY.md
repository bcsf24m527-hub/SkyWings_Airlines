# 🚀 How to Run SkyWings Airlines - Step by Step

Follow these steps to run the project with demo data before uploading to GitHub.

## Prerequisites Checklist

Before you start, make sure you have:
- [ ] **Node.js v14+** installed ([Download](https://nodejs.org/))
- [ ] **MySQL Server** running
  - Windows: Open `Services` (`services.msc`) and start MySQL80
  - macOS: `brew services start mysql`
  - Linux: `sudo service mysql start`
- [ ] MySQL root password (or know the password you set)

---

## ✅ Setup Instructions

### Option 1: Automated Setup (Recommended)

#### Windows (Batch Script)
```bash
cd backend
setup.bat
```

The script will:
1. ✓ Check Node.js and npm
2. ✓ Verify .env configuration
3. ✓ Install dependencies
4. ✓ Create database
5. ✓ Load demo data

#### macOS/Linux (PowerShell or Bash)
```bash
cd backend
./setup.ps1          # PowerShell
# or run manual steps below
```

---

### Option 2: Manual Setup (Step by Step)

If the automated script doesn't work, follow these steps:

#### Step 1: Navigate to Backend
```bash
cd backend
```

#### Step 2: Verify .env Configuration
Open `backend/.env` and verify/update your settings:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password    # ← IMPORTANT: Set your MySQL password here
DB_NAME=skywings_airlines
PORT=3000
NODE_ENV=development
JWT_SECRET=skywings-secret-key-change-in-production
```

**⚠️ Critical**: If you don't know your MySQL password:
```bash
# You can reset it or use empty password
# Edit the line to: DB_PASSWORD=
```

#### Step 3: Test MySQL Connection
```bash
mysql -u root -p
# When prompted, enter your MySQL root password
# Type: exit
```

If this fails, your MySQL credentials in `.env` are incorrect.

#### Step 4: Install Dependencies
```bash
npm install
```

This will take 1-2 minutes. You'll see lots of output. Wait for it to complete.

#### Step 5: Create Database
```bash
# Windows (PowerShell)
mysql -u root -p"your_password" < database\schema.sql

# macOS/Linux
mysql -u root -p < database/schema.sql
# Then enter your password when prompted
```

Replace `your_password` with your actual MySQL password (or leave empty if no password).

If successful, you'll see no output or "Query OK" messages.

#### Step 6: Load Demo Data
```bash
node src/scripts/initialize_database.js
```

You should see:
```
✓ Database initialized
✓ Admin user created
✓ Sample users created
✓ Demo flights loaded
```

---

## 🚀 Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

You should see:
```
✅ Database connected successfully
🚀 SkyWings Airlines server running on http://localhost:3000
📊 API endpoints available at http://localhost:3000/api
🌐 Access the application at http://localhost:3000
```

---

## 🧪 Testing the Application

### 1. Open in Browser
```
http://localhost:3000
```

You should see the SkyWings Airlines homepage.

### 2. Login with Demo Account

Click "Login" and use:
- **Email**: `user@skywings.com`
- **Password**: `user123`

### 3. Test Features
- ✓ Search for flights
- ✓ Make a booking
- ✓ View your bookings
- ✓ Check-in for a flight

### 4. Admin Access
Logout and login as admin:
- **Email**: `admin@skywings.com`
- **Password**: `admin123`

Then:
- ✓ View admin dashboard
- ✓ Manage flights
- ✓ View all users
- ✓ Generate reports

---

## 🔌 API Testing (Optional)

Test API endpoints with curl:

### Health Check
```bash
curl http://localhost:3000/api/health
```

Response:
```json
{"status":"ok","message":"SkyWings API is running"}
```

### Search Flights
```bash
curl "http://localhost:3000/api/flights/search?source=NYC&destination=LAX"
```

### Login API
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@skywings.com","password":"user123"}'
```

---

## ⚠️ Troubleshooting

### Problem: MySQL Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:3306
```

**Solution:**
1. Check .env password is correct
2. Verify MySQL is running:
   - Windows: `services.msc` → MySQL80 → check status
   - macOS: `brew services list | grep mysql`
3. Try connecting manually:
   ```bash
   mysql -u root -p
   ```

### Problem: Port 3000 Already in Use
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:**
1. Find what's using port 3000:
   ```bash
   # Windows
   netstat -ano | findstr :3000
   
   # macOS/Linux
   lsof -i :3000
   ```
2. Kill the process (Windows):
   ```bash
   taskkill /PID <PID> /F
   ```
3. Or change PORT in `.env` file

### Problem: Database Not Found
```
Error: Unknown database 'skywings_airlines'
```

**Solution:**
1. Create database manually:
   ```bash
   mysql -u root -p
   > CREATE DATABASE skywings_airlines;
   > exit
   ```
2. Then run schema:
   ```bash
   mysql -u root -p skywings_airlines < database/schema.sql
   ```
3. Load demo data:
   ```bash
   node src/scripts/initialize_database.js
   ```

### Problem: npm install Fails
```
npm ERR! code ...
```

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -r node_modules
rm package-lock.json

# Reinstall
npm install
```

### Problem: Database Script Errors
```
Error: "No such file or directory"
```

**Solution:**
- Make sure you're in the `backend` folder
- Check paths: Windows uses `\`, macOS/Linux use `/`

---

## 📊 Demo Database Contents

After running setup.js, your database contains:

**Test Users:**
- Admin account (admin@skywings.com / admin123)
- User account (user@skywings.com / user123)
- Plus 5+ additional test users

**Sample Data:**
- 3 airlines (Air Pakistan, Emirates, Qatar Airways)
- 12 sample flights with different routes
- 5+ sample bookings
- Multiple check-ins
- Sample seat assignments

---

## ✅ Checklist Before Uploading to GitHub

After testing locally:
- [ ] Application starts without errors
- [ ] Can login with test credentials
- [ ] Can search and book flights
- [ ] Can check-in for flights
- [ ] Admin dashboard works
- [ ] All API endpoints respond
- [ ] No sensitive data in files
- [ ] .env is in .gitignore
- [ ] .env.example shows template correctly

---

## 📝 Quick Command Reference

```bash
# From the root folder
cd backend

# Install dependencies
npm install

# Create/update database
mysql -u root -p < database/schema.sql

# Load demo data
node src/scripts/initialize_database.js

# Start server (development)
npm run dev

# Start server (production)
npm start

# Test API
curl http://localhost:3000/api/health

# Stop server
Ctrl + C
```

---

## 🎓 Next Steps

After successful testing:

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SkyWings Airlines flight booking system"
   git remote add origin https://github.com/YOUR_USERNAME/skywings-airlines.git
   git branch -M main
   git push -u origin main
   ```

2. **Update README** with any findings from testing

3. **Add `.gitignore` entries** if needed for your environment

4. **Create GitHub Issues** for any improvements

---

**💡 Tips:**
- Keep the server running while testing
- Open browser to http://localhost:3000 while server is running
- Check terminal output for any errors
- .env file is only for your local machine (never upload)

**Questions?** Check the troubleshooting section above!

---

**Last Updated**: December 2025
