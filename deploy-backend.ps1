#!/usr/bin/env pwsh
# Quick Backend Deployment Script for Render.com

Write-Host "🚀 Backend Deployment Helper for Render.com" -ForegroundColor Cyan
Write-Host ""

# Collect credentials
Write-Host "Please provide the following details:" -ForegroundColor Yellow
Write-Host ""

$mongoUri = Read-Host "MongoDB Connection URI (from Atlas)"
$geminiKey = Read-Host "Gemini API Key (from Google AI Studio)"

Write-Host ""
Write-Host "✅ Great! Here's your Render.com configuration:" -ForegroundColor Green
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "📋 Copy these environment variables to Render:" -ForegroundColor Yellow
Write-Host ""
Write-Host "MONGODB_URI=$mongoUri" -ForegroundColor White
Write-Host "GEMINI_API_KEY=$geminiKey" -ForegroundColor White
Write-Host "PORT=4001" -ForegroundColor White
Write-Host "NODE_ENV=production" -ForegroundColor White
Write-Host "ALLOWED_ORIGINS=https://bsse23094.github.io" -ForegroundColor White
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

Write-Host "📝 Render.com Build & Start Commands:" -ForegroundColor Yellow
Write-Host ""
Write-Host "Build Command:  npm install && npm run build" -ForegroundColor White
Write-Host "Start Command:  npm start" -ForegroundColor White
Write-Host "Root Directory: server" -ForegroundColor White
Write-Host ""

# Save to .env file for local testing
$envContent = @"
MONGODB_URI=$mongoUri
GEMINI_API_KEY=$geminiKey
PORT=4001
NODE_ENV=production
ALLOWED_ORIGINS=http://localhost:5173,https://bsse23094.github.io
"@

$envContent | Out-File -FilePath "server\.env" -Encoding utf8
Write-Host "✅ Saved to server\.env for local testing" -ForegroundColor Green
Write-Host ""

Write-Host "🌐 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Go to: https://render.com/register" -ForegroundColor White
Write-Host "2. Create a new Web Service" -ForegroundColor White
Write-Host "3. Connect your GitHub repo: bsse23094/who-is-the-clown" -ForegroundColor White
Write-Host "4. Paste the environment variables above" -ForegroundColor White
Write-Host "5. Deploy!" -ForegroundColor White
Write-Host ""

$openRender = Read-Host "Open Render.com now? (Y/n)"
if ($openRender -ne "n") {
    Start-Process "https://render.com/register"
}

Write-Host ""
Write-Host "🎉 Backend setup ready! Your backend will be live in ~10 minutes after deployment." -ForegroundColor Green
