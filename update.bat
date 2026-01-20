@echo off
echo Adding all files...
git add .

echo Committing...
set /p msg="Enter commit message: "
if "%msg%"=="" set msg="Update files"
git commit -m "%msg%"

echo Pushing to GitHub...
git push origin main

echo Done!
pause