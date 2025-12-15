# Migration Guide: XAMPP MySQL to Standalone MySQL

This guide will help you migrate from XAMPP MySQL to standalone MySQL Server.

## ✅ What Has Been Changed

1. **Database Configuration** (`config/database.js`)
   - Added explicit port configuration (3306)
   - Removed hardcoded XAMPP password
   - Updated error messages to reference standalone MySQL
   - Added better connection options for standalone MySQL

2. **Connection Test Script** (`scripts/test_mysql_connection.js`)
   - New script to test your MySQL connection
   - Helps verify credentials before running the application

3. **Documentation Updates**
   - README.md updated with standalone MySQL instructions

## 📋 Next Steps

### Step 1: Create .env File

Create a `.env` file in the root directory with your MySQL credentials:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password_here
DB_NAME=skywings_airlines
PORT=3000
NODE_ENV=development
JWT_SECRET=skywings-secret-key-change-in-production
```

**Important:**
- Replace `your_mysql_password_here` with your actual MySQL root password
- If MySQL has no password, leave it empty: `DB_PASSWORD=`

### Step 2: Test MySQL Connection

Run the test script to verify your connection:

```bash
node scripts/test_mysql_connection.js
```

This will:
- Test connection to MySQL Server
- Show MySQL version
- Check if database exists
- Provide troubleshooting tips if connection fails

### Step 3: Create Database (if needed)

If the database doesn't exist, create it:

```bash
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS skywings_airlines;"
```

Or if you don't have a password:

```bash
mysql -u root -e "CREATE DATABASE IF NOT EXISTS skywings_airlines;"
```

### Step 4: Import Database Schema

If you haven't already set up the database schema:

```bash
mysql -u root -p skywings_airlines < sql/schema.sql
```

### Step 5: Verify MySQL Service is Running

**Windows:**
- Open Services (`Win + R` → type `services.msc`)
- Look for "MySQL80" or "MySQL" service
- Ensure it's running

**Or use PowerShell:**
```powershell
Get-Service -Name "*mysql*"
```

### Step 6: Start Your Application

```bash
npm start
```

## 🔍 Troubleshooting

### Connection Refused
- **Check:** Is MySQL Server running?
- **Solution:** Start MySQL service from Windows Services

### Access Denied
- **Check:** Is your MySQL password correct?
- **Solution:** Update `DB_PASSWORD` in `.env` file

### Database Doesn't Exist
- **Check:** Run `node scripts/test_mysql_connection.js`
- **Solution:** Create database using Step 3 above

### Port Already in Use
- **Check:** Is XAMPP MySQL still running?
- **Solution:** Stop XAMPP MySQL service, use only standalone MySQL

## ⚠️ Important Notes

1. **Don't run both XAMPP MySQL and standalone MySQL simultaneously** - they both use port 3306
2. **Ensure XAMPP MySQL is stopped** before using standalone MySQL
3. **Backup your data** if you have important data in XAMPP MySQL that needs to be migrated

## 📞 Need Help?

Run the test script for detailed error messages:
```bash
node scripts/test_mysql_connection.js
```

This will provide specific guidance based on your error.

