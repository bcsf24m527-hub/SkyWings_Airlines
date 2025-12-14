# ⚡ START HERE - How to Run the Project

This file explains how to get the SkyWings Airlines application running on your computer in under 5 minutes.

---

## 🎯 TLDR (Too Long; Didn't Read)

```bash
# 1. Go to backend folder
cd backend

# 2. Run setup (Windows)
setup.bat

# 3. After setup completes, run server in SAME terminal window
npm start

# 4. Open browser: http://localhost:3000

# 5. Login with: user@skywings.com / user123
```

That's it! If it works, you're ready to upload to GitHub.

---

## 📖 Detailed Steps (Choose Your Path)

### Path A: Windows Users (Easiest)

#### Step 1: Open Command Prompt
- Press `Win + R`
- Type: `cmd`
- Press Enter

#### Step 2: Navigate to Project
```bash
cd d:\PUCIT\Semester 03\DataBase Systems\WEB\backend
```

#### Step 3: Run Setup
```bash
setup.bat
```

Wait for the script to finish. You should see:
```
✓ Dependencies installed
✓ Database created
✓ Demo data loaded
Setup Complete!
```

#### Step 4: Start Server
In the **SAME command prompt window**, type:
```bash
npm start
```

You should see:
```
✅ Database connected successfully
🚀 SkyWings Airlines server running on http://localhost:3000
```

#### Step 5: Open in Browser
- Open your web browser
- Go to: `http://localhost:3000`
- You should see the SkyWings homepage

---

### Path B: macOS/Linux Users

#### Step 1: Open Terminal

#### Step 2: Navigate to Project
```bash
cd "d:\PUCIT\Semester 03\DataBase Systems\WEB\backend"
```
Or on macOS/Linux, adjust the path accordingly.

#### Step 3: Edit .env
Before running setup, edit `backend/.env`:
```bash
nano .env
```

Make sure DB_PASSWORD matches your MySQL password.

#### Step 4: Run Setup Commands
```bash
# Install dependencies
npm install

# Create database
mysql -u root -p < database/schema.sql
# Enter your MySQL password when prompted

# Load demo data
node src/scripts/initialize_database.js
```

#### Step 5: Start Server
```bash
npm start
```

#### Step 6: Open Browser
- Open web browser
- Go to: `http://localhost:3000`

---

### Path C: Manual Setup (If Automated Fails)

```bash
# 1. Navigate to backend
cd backend

# 2. Install packages
npm install

# 3. Edit .env file with your MySQL password
# Open backend/.env and change:
# DB_PASSWORD=your_actual_mysql_password

# 4. Create database (Windows)
mysql -u root -p"your_password" < database\schema.sql

# Or (macOS/Linux)
mysql -u root -p < database/schema.sql
# Enter password when prompted

# 5. Load demo data
node src/scripts/initialize_database.js

# 6. Start server
npm start
```

---

## 🧪 Testing the Application

Once you see the server running message, the app is ready!

### Test Login
1. Go to http://localhost:3000
2. Click "Login"
3. Use credentials:
   - **Email**: `user@skywings.com`
   - **Password**: `user123`
4. You should see the user dashboard

### Test Admin
1. Logout
2. Login with admin credentials:
   - **Email**: `admin@skywings.com`
   - **Password**: `admin123`
3. You should see the admin dashboard

### Test Features
- Search for flights
- Make a booking
- Check-in for a flight
- View bookings
- Try admin features (manage flights, reports, etc.)

---

## ❌ If Something Goes Wrong

### Problem: "MySQL connection failed"
**Solution:**
1. Make sure MySQL is running
   - Windows: `services.msc` → find MySQL80 → right-click → Start
   - macOS: `brew services start mysql`
2. Check your MySQL password in `backend/.env`
3. Test manually:
   ```bash
   mysql -u root -p
   # Type your password
   # Should see: mysql>
   # Type: exit
   ```

### Problem: "Port 3000 already in use"
**Solution:**
1. Option A: Kill the other process
   ```bash
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <number> /F
   
   # macOS/Linux
   lsof -i :3000
   kill -9 <PID>
   ```

2. Option B: Use different port
   - Edit `backend/.env`
   - Change: `PORT=3001`
   - Start server again

### Problem: "npm install failed"
**Solution:**
```bash
npm cache clean --force
rm -r node_modules
npm install
```

### Problem: "Database error"
**Solution:**
1. Drop and recreate:
   ```bash
   mysql -u root -p
   > DROP DATABASE skywings_airlines;
   > exit
   ```
2. Run setup again:
   ```bash
   mysql -u root -p < database/schema.sql
   node src/scripts/initialize_database.js
   ```

---

## 🔗 What's Running?

When you run `npm start`, here's what happens:

```
Your Computer
    ↓
├─ Backend (Node.js) runs on PORT 3000
│  ├─ Connects to MySQL database
│  ├─ Handles all API requests
│  └─ Serves frontend files
│
├─ Frontend files served at http://localhost:3000
│  ├─ HTML pages
│  ├─ CSS styling
│  ├─ JavaScript logic
│  └─ Images
│
└─ MySQL database (skywings_airlines)
   ├─ Users table
   ├─ Flights table
   ├─ Bookings table
   └─ Check-ins table
```

---

## 📁 File Structure

```
Your project:
    backend/
    ├─ src/
    │  ├─ routes/         ← API endpoints
    │  ├─ config/         ← Database config
    │  ├─ middleware/     ← Auth logic
    │  └─ scripts/        ← Setup scripts
    ├─ database/
    │  └─ schema.sql      ← Database structure
    ├─ server.js          ← Main server file
    ├─ package.json       ← Dependencies
    ├─ .env.example       ← Template (share this)
    ├─ .env               ← Your config (DON'T share)
    ├─ setup.bat          ← Windows setup
    └─ setup.ps1          ← PowerShell setup
    
    frontend/
    └─ public/
       ├─ index.html
       ├─ login.html
       ├─ css/
       ├─ js/
       └─ images/
```

---

## ✅ Checklist Before GitHub Upload

After testing:
- [ ] Application starts: `npm start` works
- [ ] Database connects successfully
- [ ] Can login with test account
- [ ] Can search flights
- [ ] Can make booking
- [ ] Can check-in
- [ ] Admin features work
- [ ] No errors in terminal
- [ ] **DON'T upload .env file** (it's in .gitignore)

---

## 📚 Need More Help?

- **Quick Reference**: See `QUICK_START.md`
- **Detailed Steps**: See `RUN_LOCALLY.md`
- **Testing Guide**: See `TESTING_GUIDE.md`
- **Full Documentation**: See `README.md`

---

## 🎓 Common Commands

```bash
# Install dependencies
npm install

# Start server
npm start

# Start server with auto-reload (development)
npm run dev

# Stop server
Ctrl + C

# Test database
mysql -u root -p

# Check running processes
netstat -ano | findstr :3000

# View logs
npm start  # (logs show in terminal)
```

---

## 🎯 Success = This Screen

When you see this in terminal, you're ready to test:

```
✅ Database connected successfully
🚀 SkyWings Airlines server running on http://localhost:3000
📊 API endpoints available at http://localhost:3000/api
🌐 Access the application at http://localhost:3000
```

Open http://localhost:3000 in browser → You're done! ✨

---

**Ready?** Start with Step 1 above and let me know if you hit any issues!

**Last Updated**: December 2025
