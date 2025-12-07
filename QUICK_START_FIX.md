# Quick Start Guide

## The Issue
You're getting a NetworkError because the backend server isn't running.

## Quick Solution: Run Backend Locally

### Option 1: Run Cloudflare Worker Locally (Recommended)

1. **Install Wrangler (if not already installed):**
```powershell
npm install -g wrangler
```

2. **Install server dependencies:**
```powershell
cd server
npm install
```

3. **Run the worker locally:**
```powershell
npm run dev
```
This starts the worker on `http://localhost:8787`

4. **In a new terminal, run the client:**
```powershell
cd client
npm run dev
```

### Option 2: Use the Old Express Backend Temporarily

If you want to test without Cloudflare Workers setup, you can temporarily use a simple Express server:

1. **Create a temporary server:**
```powershell
cd server
npm install express cors socket.io
```

2. **Run the old server (if you still have the old code):**
```powershell
npm start
```

### Option 3: Quick Mock Server (Fastest for Testing)

I can create a minimal mock server that just handles room creation for testing the UI:

```powershell
cd server
node mock-server.js
```

## Current Setup

Your `.env` now points to: `http://localhost:8787`

This is the default Cloudflare Worker dev server port.

## What's Happening

1. Client tries to connect to server at `VITE_SERVER_URL`
2. Server is not running → NetworkError
3. Need to start the backend (Cloudflare Worker)

## Next Steps

Choose **Option 1** (recommended) and run:

```powershell
# Terminal 1 - Backend
cd server
npm install
npm run dev

# Terminal 2 - Frontend  
cd client
npm run dev
```

Then visit `http://localhost:5173` and create a room!
