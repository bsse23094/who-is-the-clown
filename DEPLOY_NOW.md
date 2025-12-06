# MongoDB Atlas & Backend Deployment Guide

## ✅ Frontend Deployed!
Your game is live at: **https://bsse23094.github.io/who-is-the-clown/**

---

## 🗄️ Setup MongoDB Atlas (5 minutes)

### 1. Create Free MongoDB Atlas Account
- Go to: https://www.mongodb.com/cloud/atlas/register
- Sign up with email or Google
- Choose **FREE M0 tier**

### 2. Create Cluster
- Click "Build a Database"
- Select **M0 FREE** (no credit card needed)
- Choose **AWS** and closest region
- Name: `clown-game-cluster`
- Click "Create"

### 3. Create Database User
- Go to **Database Access** (left sidebar)
- Click "Add New Database User"
- Username: `clowngame`
- Click "Autogenerate Secure Password" - **SAVE THIS PASSWORD!**
- Database User Privileges: **Read and write to any database**
- Click "Add User"

### 4. Allow Network Access
- Go to **Network Access** (left sidebar)
- Click "Add IP Address"
- Click "Allow Access from Anywhere" (0.0.0.0/0)
- Click "Confirm"

### 5. Get Connection String
- Go back to **Database** → Click "Connect" on your cluster
- Choose "Connect your application"
- Copy the connection string (looks like):
  ```
  mongodb+srv://clowngame:<password>@cluster.mongodb.net/?retryWrites=true&w=majority
  ```
- Replace `<password>` with your actual password
- Add database name after `.net/`: 
  ```
  mongodb+srv://clowngame:YourPassword123@cluster.mongodb.net/clown-game?retryWrites=true&w=majority
  ```

**✅ Save this connection string - you'll need it next!**

---

## 🔑 Get Google Gemini API Key (2 minutes)

1. Go to: https://makersuite.google.com/app/apikey
2. Click "Get API Key" or "Create API Key"
3. Copy your API key (starts with `AIza...`)

**✅ Save this API key!**

---

## 🚀 Deploy Backend to Render.com (10 minutes)

### 1. Create Render Account
- Go to: https://render.com
- Sign up with GitHub
- Authorize Render to access your repository

### 2. Create Web Service
- Click "New +" → "Web Service"
- Connect your repository: `who-is-the-clown`
- Configure:
  - **Name**: `who-is-the-clown-api`
  - **Region**: Choose closest to you
  - **Root Directory**: `server`
  - **Environment**: `Node`
  - **Build Command**: `npm install && npm run build`
  - **Start Command**: `npm start`
  - **Instance Type**: Free

### 3. Add Environment Variables
Click "Advanced" → Add these environment variables:

```
MONGODB_URI=mongodb+srv://clowngame:YourPassword@cluster.mongodb.net/clown-game?retryWrites=true&w=majority
GEMINI_API_KEY=AIza...your-api-key
PORT=4001
NODE_ENV=production
ALLOWED_ORIGINS=https://bsse23094.github.io
```

Replace with YOUR actual MongoDB URI and Gemini API key!

### 4. Deploy
- Click "Create Web Service"
- Wait 5-10 minutes for deployment
- Copy your service URL (like): `https://who-is-the-clown-api.onrender.com`

---

## 🔗 Connect Frontend to Backend

Once your backend is deployed, you need to update the frontend:

### 1. Create `client/.env` file:
```bash
cd client
echo "VITE_SERVER_URL=https://who-is-the-clown-api.onrender.com" > .env
```

### 2. Rebuild and deploy:
```bash
npm run deploy
```

---

## ✅ Test Your Deployment

1. Visit: https://bsse23094.github.io/who-is-the-clown/
2. Create a room
3. Open incognito window, join with room code
4. Play a round!

**Note**: First request to backend may take 30-60 seconds (Render free tier cold start).

---

## 🎉 Your Game is Live!

**Frontend**: https://bsse23094.github.io/who-is-the-clown/  
**Backend**: https://who-is-the-clown-api.onrender.com (replace with your actual URL)

Share with friends! 🎭

---

## 💡 Quick Commands Reference

```bash
# Update and redeploy frontend
cd client
npm run deploy

# Check backend logs (after deploying to Render)
# Go to Render dashboard → your service → Logs tab

# Update backend code
git add .
git commit -m "Update backend"
git push
# Render auto-deploys on push
```

---

## 🆘 Troubleshooting

### Frontend shows "Failed to connect"
- Check backend is deployed and running on Render
- Verify `client/.env` has correct backend URL
- Check backend logs on Render dashboard

### Backend crashes
- Check MongoDB connection string is correct
- Verify Gemini API key is valid
- Check Render logs for error messages

### MongoDB connection fails
- Verify password is correct (no special characters causing issues)
- Check IP whitelist includes 0.0.0.0/0
- Make sure database user has correct permissions

---

**Total Cost: $0/month** 🎉

All services are on free tiers!
