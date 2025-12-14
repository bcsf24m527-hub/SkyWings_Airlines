# Uploading this repository to GitHub (PowerShell)

This file explains exact PowerShell commands to prepare the repo and upload it to GitHub safely.

Important checklist before uploading:
- Remove any private files (e.g., `USER_CREDENTIALS.txt`) from the working tree or move them offline.
- Ensure `backend/.env` and any other `.env` files are NOT committed (they are in `.gitignore`).
- Confirm `.gitignore` includes `node_modules/`, `backend/.env`, and `USER_CREDENTIALS.txt`.

1) (Optional) Delete or move sensitive files locally

If you have a file you don't want in the repo at all (recommended), remove it now:

```powershell
# Delete the credentials file locally (permanently)
Remove-Item -Path .\USER_CREDENTIALS.txt -Force

# OR move it to a safe location outside this repo
Move-Item -Path .\USER_CREDENTIALS.txt -Destination C:\secure_backup\USER_CREDENTIALS.txt
```

2) Initialize Git, commit, and push (new repository)

```powershell
# From repository root (run in PowerShell)
Set-Location -Path "d:\PUCIT\Semester 03\DataBase Systems\WEB"

# Initialize git if not already
git init

# Ensure branch name is main
git checkout -b main

# Stage files (gitignore prevents sensitive files)
git add .

# Commit
git commit -m "Initial commit: project ready for GitHub"

# Create remote on GitHub (replace placeholders)
# Option A: Use GitHub website: create repo and copy remote URL
# Option B: Use GitHub CLI (if installed):
# gh repo create my-repo --public --source=. --remote=origin --push

# Add remote (replace with your repo URL)
git remote add origin https://github.com/USERNAME/REPO.git

# Push to remote
git push -u origin main
```

3) If a sensitive file was already committed previously

If `USER_CREDENTIALS.txt`, `.env`, or other secrets were already committed and you want to remove them from the current history (NOT just future commits), do the following carefully.

A safe quick fix (removes file from current index but keeps history):

```powershell
# Remove from index (stop tracking) but keep local file
git rm --cached USER_CREDENTIALS.txt
git commit -m "Remove tracked credentials file"
git push
```

To remove a file from all history (more advanced + destructive): use `git filter-repo` or the BFG Repo-Cleaner. Example (requires installing `git-filter-repo`):

```powershell
# Warning: This rewrites history. Do not run unless you know what you're doing and you have backups.
python -m pip install git-filter-repo
git clone --mirror https://github.com/USERNAME/REPO.git
cd REPO.git
python -m git_filter_repo --invert-paths --paths USER_CREDENTIALS.txt
# Then push the cleaned mirror back to GitHub (force push required)
```

4) Final checks before public upload

```powershell
# List ignored files that would be ignored
git status --ignored

# Confirm .env is ignored
Select-String -Path .gitignore -Pattern "\.env" -SimpleMatch
```

5) Helpful tips
- Always keep `backend/.env` out of GitHub; use `backend/.env.example` as a template.
- Use strong `JWT_SECRET` in production and never publish it.
- Consider creating a `release` or `tag` for stable uploads.

If you want, I can run the git commands here (initialize, commit) for you — tell me whether to proceed and provide the remote repo URL or let me create a placeholder commit only.
