# Testing Guide - Before GitHub Upload

Complete guide to run and test the SkyWings Airlines application locally with demo data.

---

## 🎯 Quick Summary

You have **4 ways** to set up and test the application:

1. **Fastest**: Automated batch/script
2. **Quick**: Copy-paste commands
3. **Detailed**: Step-by-step guide
4. **Manual**: Individual SQL commands

Choose the one that works best for you!

---

## 🔥 Super Quick Start (2 minutes)

### Windows Users
```bash
cd backend
setup.bat
```

Then in a new terminal:
```bash
cd backend
npm start
```

Open: `http://localhost:3000`

### macOS/Linux Users
```bash
cd backend
# Edit .env with your MySQL password first!
npm install
mysql -u root -p < database/schema.sql
node src/scripts/initialize_database.js
npm start
```

Open: `http://localhost:3000`

---

## 📋 Files Included

### Setup Guides
- **RUN_LOCALLY.md** ← Detailed step-by-step instructions
- **QUICK_START.md** ← Quick reference guide

### Setup Scripts
- **backend/setup.bat** ← Windows automated setup
- **backend/setup.ps1** ← PowerShell version
- **backend/setup.js** ← Node.js version

### Configuration
- **backend/.env.example** ← Template
- **backend/.env** ← Your local config (NEVER upload)

---

## 🧪 Testing Checklist

After running the application, verify these work:

### Web Application Tests
- [ ] **Homepage** loads at http://localhost:3000
- [ ] **Login page** displays
- [ ] **Register page** works
- [ ] **Login with test user**
  - Email: user@skywings.com
  - Password: user123
- [ ] **Search flights** feature works
- [ ] **Make a booking** (select flight → book)
- [ ] **View my bookings** page shows your reservations
- [ ] **Check-in** for a flight works
- [ ] **Logout** works
- [ ] **Login as admin**
  - Email: admin@skywings.com
  - Password: admin123
- [ ] **Admin dashboard** displays
- [ ] **Manage flights** page works
- [ ] **View users** page works
- [ ] **Reports** feature works

### API Tests (Optional)
```bash
# Test API is working
curl http://localhost:3000/api/health

# Should return: {"status":"ok","message":"SkyWings API is running"}
```

---

## 📊 Demo Data Provided

After setup, you'll have:

**Test Accounts:**
- 1 Admin account
- 1 Regular user account
- 5+ additional test users

**Sample Data:**
- 3 airlines
- 12 flights with different routes
- Booking samples
- Check-in samples
- 20+ seats with assignments

---

## ⚠️ Important Before Upload

1. **Verify .env is in .gitignore**
   - It should be (we added it)
   - Never upload with real credentials

2. **Delete .env file** before uploading
   - It contains your MySQL password
   - Users will copy .env.example and create their own

3. **Keep demo data in GitHub**
   - The SQL schema and scripts are fine
   - They help new users get started

4. **Test Everything Works**
   - Before uploading, make sure app runs fully
   - All features tested locally

---

## 🚨 If You Hit Problems

### MySQL Connection Fails
```bash
# Check if MySQL is running
mysql -u root -p
# Enter password
> exit
```

If this fails:
- Update DB_PASSWORD in backend/.env
- Restart MySQL service
- Check MySQL port (usually 3306)

### Port 3000 in Use
```bash
# Find what's using it
netstat -ano | findstr :3000

# Kill it (Windows)
taskkill /PID <number> /F

# Or use different port - edit backend/.env
PORT=3001
```

### npm install Fails
```bash
npm cache clean --force
rm -r node_modules
npm install
```

### Database Already Exists
```bash
# Drop and recreate
mysql -u root -p
> DROP DATABASE skywings_airlines;
> exit

# Then run setup again
mysql -u root -p < database/schema.sql
```

---

## 📝 Verification Checklist

Before uploading to GitHub, check:

- [ ] Application runs without crashes
- [ ] Database connects successfully
- [ ] Can login with test credentials
- [ ] Can perform flight search
- [ ] Can make a booking
- [ ] Can check-in for flight
- [ ] Admin can access admin panel
- [ ] Admin can manage flights
- [ ] No .env file in repo (only .env.example)
- [ ] All routes respond correctly
- [ ] Frontend loads all CSS/JS
- [ ] Images display correctly
- [ ] API endpoints return data

---

## 🎯 Next: Upload to GitHub

Once testing is complete:

```bash
# From root folder
cd ..

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: SkyWings Airlines flight booking system with demo data"

# Add remote (create repo on GitHub first)
git remote add origin https://github.com/YOUR_USERNAME/skywings-airlines.git

# Push
git branch -M main
git push -u origin main
```

---

## 📞 Troubleshooting Reference

| Problem | Solution |
|---------|----------|
| MySQL not connecting | Check .env password, restart MySQL |
| Port 3000 in use | Change PORT in .env or kill process |
| npm install fails | `npm cache clean --force` then retry |
| Database not found | Run `mysql -u root -p < database/schema.sql` |
| API returns 404 | Make sure backend/src/routes files exist |
| Frontend CSS missing | Check path: should be `frontend/public/css/` |

---

## 📚 All Setup Options

### Fastest (Automated)
```bash
cd backend
setup.bat          # Windows only
# or
./setup.ps1        # PowerShell
```

### Quick (Individual Commands)
```bash
cd backend
npm install
mysql -u root -p < database/schema.sql
node src/scripts/initialize_database.js
npm start
```

### Detailed (Step by Step)
See **RUN_LOCALLY.md** for complete instructions

### Manual (SQL Commands)
See **QUICK_START.md** step 2 onwards

---

## ✅ You're All Set!

Everything is ready to:
1. Test the application locally
2. Verify all features work
3. Check for any issues
4. Upload to GitHub with confidence

**Questions?** Refer to RUN_LOCALLY.md or QUICK_START.md

---

**Last Updated**: December 2025
