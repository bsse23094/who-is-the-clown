#!/usr/bin/env pwsh
# Update Frontend with Backend URL

Write-Host "🎨 Frontend Configuration Helper" -ForegroundColor Cyan
Write-Host ""

$backendUrl = Read-Host "Enter your Render.com backend URL (e.g., https://who-is-the-clown-api.onrender.com)"

if ($backendUrl -eq "") {
    Write-Host "❌ Backend URL is required!" -ForegroundColor Red
    exit 1
}

# Remove trailing slash if present
$backendUrl = $backendUrl.TrimEnd('/')

# Create .env file
$envContent = "VITE_SERVER_URL=$backendUrl"
$envContent | Out-File -FilePath "client\.env" -Encoding utf8

Write-Host "✅ Created client\.env with backend URL" -ForegroundColor Green
Write-Host ""

Write-Host "🏗️  Building and deploying frontend..." -ForegroundColor Yellow
Push-Location client

try {
    npm run deploy
    Write-Host ""
    Write-Host "🎉 Frontend deployed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your game is live at: https://bsse23094.github.io/who-is-the-clown/" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "⏱️  Note: First backend request may take 30-60 seconds (Render cold start)" -ForegroundColor Yellow
}
catch {
    Write-Host "❌ Deployment failed: $_" -ForegroundColor Red
}
finally {
    Pop-Location
}
