# 🎉 Complete Testing Guide - All Resources Summary

Everything you need to run, test, and upload your SkyWings Airlines project to GitHub!

---

## 🚀 THE FASTEST PATH (3 minutes)

### Windows Users:
```bash
cd backend
setup.bat
npm start
```
Then open: `http://localhost:3000`

### macOS/Linux Users:
```bash
cd backend
npm install
mysql -u root -p < database/schema.sql
node src/scripts/initialize_database.js
npm start
```
Then open: `http://localhost:3000`

---

## 📚 Documentation Files (Choose Your Path)

### Option A: I have 5 minutes ⏱️
→ **READ: START_HERE.md**
- Copy-paste commands
- Quick troubleshooting
- Done!

### Option B: I have 15 minutes ⏱️
→ **READ: START_HERE.md + QUICK_START.md**
- Follow setup steps
- Test application
- Verify everything works

### Option C: I have 30 minutes ⏱️
→ **READ: RUN_LOCALLY.md**
- Detailed step-by-step
- Understand each part
- Complete troubleshooting

### Option D: I want to be thorough ⏱️
→ **READ: RUN_LOCALLY.md + TESTING_GUIDE.md + README.md**
- Complete understanding
- Thorough testing
- Full documentation

---

## 📋 All Documentation Files

```
ROOT FOLDER (skywings-airlines/):
│
├─ 📍 START_HERE.md
│  └─ READ THIS FIRST!
│     • TLDR section (copy-paste commands)
│     • 3 setup paths (Windows/macOS/Linux)
│     • Quick troubleshooting
│     • ⏱️ 15 minutes to complete
│
├─ 📄 QUICK_START.md
│  └─ Quick reference guide
│     • Prerequisites checklist
│     • Install & setup commands
│     • Testing credentials
│     • ⏱️ 5 minutes to read
│
├─ 📄 RUN_LOCALLY.md
│  └─ Complete step-by-step guide
│     • Detailed explanations
│     • Database setup
│     • API testing with curl
│     • Extended troubleshooting
│     • ⏱️ 30 minutes to read/follow
│
├─ 📄 TESTING_GUIDE.md
│  └─ Testing and verification checklist
│     • Testing scenarios
│     • Demo data info
│     • Pre-upload checklist
│     • ⏱️ 20 minutes
│
├─ 📄 README.md
│  └─ Full project documentation
│     • Project overview
│     • Tech stack
│     • API reference
│     • Architecture overview
│     • ⏱️ 30 minutes
│
├─ 📄 SETUP_COMPLETE.md
│  └─ Setup summary
│     • What's been done
│     • File structure
│     • Quick commands
│     • ⏱️ 10 minutes
│
├─ 📄 DOCUMENTATION_INDEX.md
│  └─ Help finding the right file
│     • Description of all docs
│     • Which file for what
│     • ⏱️ 5 minutes
│
└─ 📄 THIS FILE
   └─ Complete testing guide summary
```

---

## 🛠️ Setup Scripts in backend/

All these scripts do the same thing (automated setup):

1. **setup.bat** - Windows batch (easiest for Windows)
2. **setup.ps1** - PowerShell (better error handling)
3. **setup.js** - Node.js (cross-platform)

All three will:
- ✓ Check Node.js and npm
- ✓ Verify MySQL connection
- ✓ Install dependencies
- ✓ Create database
- ✓ Load demo data

**Use whichever one works best for your system!**

---

## 🎯 My Quick Decision Tree

```
Do you know what to do?
├─ Yes → Run: cd backend && setup.bat && npm start
│
└─ No? 
   ├─ Want super quick?
   │  └─ Read: START_HERE.md (15 min) → Run commands → Done
   │
   ├─ Want to understand?
   │  └─ Read: RUN_LOCALLY.md (30 min) → Follow steps → Done
   │
   ├─ Want complete guide?
   │  └─ Read: README.md → Understand full project
   │
   └─ Don't know what to do?
      └─ Read: DOCUMENTATION_INDEX.md → Choose best file
```

---

## ✅ Before You Start

Make sure you have:
- [ ] Node.js installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] MySQL running (check Services on Windows)
- [ ] MySQL password (to put in .env)

---

## 🚀 To Run the Project

### From Project Root:
```bash
cd backend
```

### Option 1: Automated (Windows)
```bash
setup.bat
npm start
```

### Option 2: Manual (All Platforms)
```bash
npm install
mysql -u root -p < database/schema.sql
node src/scripts/initialize_database.js
npm start
```

### Then in Browser:
```
http://localhost:3000
```

---

## 🧪 Testing Once Running

### Login Options:
**Regular User:**
- Email: `user@skywings.com`
- Password: `user123`

**Admin User:**
- Email: `admin@skywings.com`
- Password: `admin123`

### Test Features:
- [ ] Homepage loads
- [ ] Login works
- [ ] Can search flights
- [ ] Can make booking
- [ ] Can check-in
- [ ] Can view bookings
- [ ] Admin panel works
- [ ] Reports work

---

## 📊 Project Structure

```
skywings-airlines/
│
├── backend/                    ← Backend code (Node.js/Express)
│   ├── src/
│   │   ├── routes/            ← API endpoints
│   │   ├── config/            ← Database config
│   │   ├── middleware/        ← Auth logic
│   │   └── scripts/           ← Setup scripts
│   ├── database/
│   │   └── schema.sql         ← Database structure
│   ├── server.js              ← Main server
│   ├── package.json           ← Dependencies
│   ├── .env                   ← Your config (DON'T upload)
│   ├── .env.example           ← Template (DO upload)
│   └── setup.bat/ps1/js       ← Setup scripts
│
├── frontend/                  ← Frontend code (HTML/CSS/JS)
│   └── public/
│       ├── index.html
│       ├── login.html
│       ├── css/
│       ├── js/
│       └── images/
│
├── Documentation/             ← All guide files
│   ├── START_HERE.md
│   ├── QUICK_START.md
│   ├── RUN_LOCALLY.md
│   ├── TESTING_GUIDE.md
│   ├── README.md
│   ├── SETUP_COMPLETE.md
│   └── DOCUMENTATION_INDEX.md
│
├── .gitignore                 ← Git ignore rules
├── LICENSE                    ← MIT License
└── node_modules/              ← Dependencies (not in git)
```

---

## 🔐 Important Security Note

**NEVER upload .env file to GitHub!**
- It contains your MySQL password
- It's already in .gitignore ✓
- Use .env.example as template (already done ✓)

---

## ⚠️ Common Issues & Solutions

| Problem | Solution |
|---------|----------|
| MySQL won't connect | Check password in .env matches your MySQL |
| Port 3000 in use | Kill process or change PORT in .env |
| npm install fails | `npm cache clean --force` then retry |
| Database error | Drop and recreate: `mysql -u root -p < database/schema.sql` |
| Frontend not loading | Check paths in backend/server.js |
| API returns 404 | Verify backend/src/routes files exist |

**For detailed troubleshooting: See RUN_LOCALLY.md**

---

## 📝 Checklist Before Uploading to GitHub

- [ ] Application runs without errors
- [ ] Database connects successfully
- [ ] Can login with test account
- [ ] Can search flights
- [ ] Can make booking
- [ ] Can check-in
- [ ] Admin features work
- [ ] All pages load
- [ ] CSS/JS load correctly
- [ ] **.env NOT in repo** (only .env.example)
- [ ] .gitignore is configured ✓
- [ ] README.md complete ✓
- [ ] License file included ✓

---

## 🚀 Upload to GitHub

Once tested and verified:

```bash
cd ..  # Go to root

git init
git add .
git commit -m "Initial commit: SkyWings Airlines flight booking system"
git remote add origin https://github.com/YOUR_USERNAME/skywings-airlines.git
git branch -M main
git push -u origin main
```

---

## 💡 Pro Tips

1. **Keep server running** - Don't close terminal while testing
2. **Use test accounts** - Demo data ready to use
3. **Check browser console** - For JavaScript errors (F12)
4. **Check terminal output** - Backend logs show there
5. **Try different user types** - Test as user AND admin
6. **Test all features** - Search, book, check-in, admin
7. **Keep .env private** - Never commit it
8. **Reference documentation** - All questions answered above

---

## 🎓 Learning Path

### Just Want It Running?
→ START_HERE.md (15 min)

### Want to Learn?
→ RUN_LOCALLY.md (30 min)

### Want Everything?
→ README.md (30 min)

### Want to Test Everything?
→ TESTING_GUIDE.md (20 min)

### Want Quick Reference?
→ QUICK_START.md (5 min)

---

## 📞 Help

All questions are answered in one of these files:

| Question | File |
|----------|------|
| How do I run it? | START_HERE.md |
| What commands? | QUICK_START.md |
| Why is this step needed? | RUN_LOCALLY.md |
| How do I test? | TESTING_GUIDE.md |
| What's the architecture? | README.md |
| Which file should I read? | DOCUMENTATION_INDEX.md |
| What's been done? | SETUP_COMPLETE.md |

---

## ✨ What's Included

✅ Backend code organized
✅ Frontend code organized  
✅ Database schema with demo data
✅ Setup scripts (automated)
✅ 7 documentation files
✅ .gitignore configured
✅ .env.example template
✅ MIT License
✅ Ready for GitHub

---

## 🎉 You're All Set!

Everything is ready. Pick one:

1. **Want to run it now?**
   - Run: `cd backend && setup.bat && npm start`

2. **Want to learn first?**
   - Read: START_HERE.md

3. **Want to understand everything?**
   - Read: RUN_LOCALLY.md + README.md

4. **Want complete testing guide?**
   - Read: TESTING_GUIDE.md

5. **Don't know what to do?**
   - Read: DOCUMENTATION_INDEX.md

---

## 🏁 Quick Start Summary

```
┌─────────────────────────────────────┐
│  1. cd backend                      │
│  2. setup.bat (Windows)             │
│  3. npm start                       │
│  4. Open http://localhost:3000      │
│  5. Login: user@skywings.com        │
│                                     │
│  ✓ App running                      │
│  ✓ Demo data loaded                 │
│  ✓ Ready to test                    │
│  ✓ Ready for GitHub                 │
└─────────────────────────────────────┘
```

---

**Status**: ✅ **READY FOR TESTING**

**Next Action**: Read START_HERE.md or run setup.bat

**Questions?** Check the documentation files above!

---

**Last Updated**: December 2025
