# 🚀 Deployment Guide for Who's the Clown?

This guide will walk you through deploying your application to free hosting services.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ GitHub account
- ✅ MongoDB Atlas account (free)
- ✅ Google AI Studio API key (free)
- ✅ Git installed locally

## 🎯 Deployment Steps Overview

1. Setup GitHub Repository
2. Deploy Database (MongoDB Atlas)
3. Deploy Backend (Render.com)
4. Deploy Frontend (GitHub Pages)
5. Connect Everything

---

## 1️⃣ Setup GitHub Repository

```bash
# Initialize git repository
cd who-is-the-clown
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Who's the Clown game"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/who-is-the-clown.git
git branch -M main
git push -u origin main
```

---

## 2️⃣ Deploy Database (MongoDB Atlas)

### Step 1: Create Account
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Sign up for free account
- Verify email

### Step 2: Create Cluster
1. Click "Build a Database"
2. Choose **M0 FREE** tier
3. Select cloud provider and region (closest to you)
4. Name your cluster (e.g., "clown-game-cluster")
5. Click "Create"

### Step 3: Configure Database Access
1. **Security** → **Database Access**
2. Click "Add New Database User"
3. Choose **Password** authentication
4. Username: `clowngame`
5. Generate secure password (save it!)
6. Database User Privileges: **Read and write to any database**
7. Click "Add User"

### Step 4: Configure Network Access
1. **Security** → **Network Access**
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Or add `0.0.0.0/0` manually
5. Click "Confirm"

### Step 5: Get Connection String
1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string (looks like):
   ```
   mongodb+srv://clowngame:<password>@cluster.mongodb.net/?retryWrites=true&w=majority
   ```
4. Replace `<password>` with your actual password
5. Add database name after `.net/`: 
   ```
   mongodb+srv://clowngame:yourpassword@cluster.mongodb.net/clown-game?retryWrites=true&w=majority
   ```

✅ **Save this connection string - you'll need it for backend deployment!**

---

## 3️⃣ Deploy Backend (Render.com)

### Step 1: Create Account
- Go to [Render.com](https://render.com)
- Sign up with GitHub
- Authorize Render to access your repository

### Step 2: Create Web Service
1. Click "New +" → "Web Service"
2. Connect your repository: `who-is-the-clown`
3. Configure:
   - **Name**: `who-is-the-clown-api`
   - **Region**: Choose closest to you
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: 
     ```bash
     npm install && npm run build
     ```
   - **Start Command**: 
     ```bash
     npm start
     ```
   - **Plan**: Free

### Step 3: Add Environment Variables
Click "Advanced" → Add Environment Variables:

```env
MONGODB_URI=mongodb+srv://clowngame:yourpassword@cluster.mongodb.net/clown-game?retryWrites=true&w=majority
GEMINI_API_KEY=your_gemini_api_key_here
PORT=4001
NODE_ENV=production
```

**To get Gemini API Key:**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Get API Key"
3. Create new API key
4. Copy and paste above

### Step 4: Deploy
1. Click "Create Web Service"
2. Wait for deployment (5-10 minutes first time)
3. Once deployed, copy your service URL:
   ```
   https://who-is-the-clown-api.onrender.com
   ```

✅ **Save this URL - you'll need it for frontend!**

### ⚠️ Important Notes for Render Free Tier:
- Service sleeps after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds
- 750 hours/month free (upgrade for always-on)

---

## 4️⃣ Deploy Frontend (GitHub Pages)

### Step 1: Update Configuration

**Update `client/package.json`:**
```json
{
  "homepage": "https://yourusername.github.io/who-is-the-clown"
}
```
Replace `yourusername` with your GitHub username.

**Update `client/vite.config.ts` (already done):**
```typescript
base: '/who-is-the-clown/'
```

**Update `client/.env`:**
```env
VITE_SERVER_URL=https://who-is-the-clown-api.onrender.com
```
Use your actual Render URL from Step 3.

### Step 2: Deploy to GitHub Pages

```bash
# Make sure you're in the project root
cd who-is-the-clown

# Commit your changes
git add .
git commit -m "Configure for deployment"
git push

# Deploy frontend
cd client
npm run deploy
```

This will:
1. Build the production bundle
2. Push to `gh-pages` branch
3. Deploy automatically

### Step 3: Enable GitHub Pages
1. Go to your GitHub repository
2. **Settings** → **Pages**
3. Source should show: **Deploy from branch: gh-pages**
4. Your site will be published at:
   ```
   https://yourusername.github.io/who-is-the-clown
   ```

⏱️ **Wait 2-5 minutes for GitHub Pages to deploy**

---

## 5️⃣ Test Your Deployment

### Backend Test
Visit: `https://your-backend.onrender.com`

Should see: `{"message": "Who's the Clown API is running"}`

### Frontend Test
1. Visit: `https://yourusername.github.io/who-is-the-clown`
2. Create a room
3. Open incognito window, join with room code
4. Play a round!

---

## 🔧 Troubleshooting

### Issue: Frontend can't connect to backend

**Solution 1: Check CORS**
In `server/src/index.ts`, ensure CORS allows your GitHub Pages domain:

```typescript
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://yourusername.github.io'
  ],
  credentials: true
};
```

**Solution 2: Check Environment Variables**
- Frontend `.env` has correct backend URL
- Backend has all required environment variables in Render

### Issue: Render service sleeping

**Solutions:**
- Upgrade to paid plan ($7/month) for always-on
- Use [UptimeRobot](https://uptimerobot.com) (free) to ping every 5 minutes
- Accept 30-second cold start on first request

### Issue: MongoDB connection failed

**Check:**
- Connection string is correct
- Password is correct (no special characters causing issues)
- IP whitelist includes `0.0.0.0/0`
- Database user has correct permissions

### Issue: GitHub Pages showing 404

**Solutions:**
- Check `homepage` in `client/package.json` matches your GitHub username
- Verify `base` in `vite.config.ts` is `/who-is-the-clown/`
- Wait 5 minutes for GitHub Pages to fully deploy
- Check GitHub Pages settings in repository

---

## 💰 Cost Breakdown

All services used are **100% FREE**:

| Service | Plan | Limitations |
|---------|------|-------------|
| MongoDB Atlas | M0 Free | 512MB storage, shared CPU |
| Render.com | Free | 750 hours/month, sleeps after 15min |
| GitHub Pages | Free | 1GB storage, 100GB bandwidth |
| Google AI Studio | Free | Rate limited, suitable for small games |

**Total Monthly Cost: $0** 🎉

---

## 🚀 Going to Production

### Recommended Upgrades:

**For Serious Use:**
1. **Render ($7/month)** - Always-on, no cold starts
2. **MongoDB Atlas ($9/month)** - Dedicated cluster, more storage
3. **Custom Domain ($12/year)** - Professional URL
4. **Google AI ($0.35/1M tokens)** - Higher rate limits

**Alternative Production Setup:**
- **Vercel** (Frontend + Serverless Backend) - Free tier generous
- **Railway** (Backend + Database) - $5/month
- **Netlify** (Frontend) - Free with custom domain

---

## 📝 Maintenance

### Update Deployment:

```bash
# Update code
git add .
git commit -m "Your changes"
git push

# Backend auto-deploys on Render
# Frontend:
cd client
npm run deploy
```

### Monitor:
- **Render Dashboard**: Check logs, restarts
- **MongoDB Atlas**: Monitor database performance
- **GitHub Actions**: Check deployment status

---

## 🎉 You're Live!

Your game is now deployed and accessible worldwide!

Share your game:
```
🎭 Play Who's the Clown with me!
https://yourusername.github.io/who-is-the-clown

Join my room with code: XXXXX
```

---

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)

---

**Need Help?** Open an issue on GitHub! 🆘
