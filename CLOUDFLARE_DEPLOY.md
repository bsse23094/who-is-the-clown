# 🚀 Cloudflare Serverless Deployment Guide

This project has been converted to a **fully serverless architecture** using Cloudflare Workers and Durable Objects.

## 🎯 Features

- ✅ **Serverless Backend** - No database required, uses Cloudflare Durable Objects for state management
- ✅ **WebSocket Support** - Real-time game updates via Cloudflare Workers
- ✅ **AI Judge Mode** - Google Gemini AI analyzes answers and picks the worst one
- ✅ **Majority Voting Mode** - Players vote for the worst answer
- ✅ **Minimal & Fast** - No MongoDB, Express, or Socket.IO dependencies
- ✅ **Global Edge Network** - Deploy to Cloudflare's edge network for low latency worldwide

## 📋 Prerequisites

1. **Node.js** (v18+)
2. **Cloudflare Account** (free tier works fine)
3. **Wrangler CLI** - Cloudflare's deployment tool

## 🛠️ Setup Instructions

### Step 1: Install Wrangler CLI

```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

This will open your browser to authenticate with Cloudflare.

### Step 3: Install Dependencies

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Step 4: Configure Environment Variables

The AI API key is already configured in `wrangler.toml`:

```toml
[vars]
GEMINI_API_KEY = "AIzaSyBZkF0atgzom8Eg_eBlhyXp3vdPwc3JzUw"
```

For production, it's recommended to use secrets:

```bash
cd server
wrangler secret put GEMINI_API_KEY
# Enter your API key when prompted
```

### Step 5: Deploy the Backend

```bash
cd server
npm run deploy
```

This will:
- Build your Worker
- Deploy to Cloudflare's edge network
- Create Durable Objects for game rooms
- Return a URL like: `https://who-is-the-clown.your-subdomain.workers.dev`

### Step 6: Update Client Configuration

Update the client to use your deployed Worker URL:

1. Open `client/src/sockets/socketClient.ts`
2. Update the `SOCKET_URL` to your Worker URL
3. Or set it via environment variable in `client/.env`:

```env
VITE_API_URL=https://who-is-the-clown.your-subdomain.workers.dev
```

### Step 7: Build and Deploy Frontend

You can deploy the frontend to:

#### Option A: Cloudflare Pages (Recommended)

```bash
cd client
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=who-is-the-clown
```

#### Option B: Any Static Host

Build the client:

```bash
cd client
npm run build
```

Deploy the `client/dist` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🎮 How It Works

### Architecture

```
┌─────────────┐         WebSocket         ┌──────────────────┐
│   Client    │ ◄─────────────────────► │ Cloudflare Worker│
│  (React)    │                           │   (Entry Point)  │
└─────────────┘                           └──────────────────┘
                                                    │
                                                    ▼
                                          ┌──────────────────┐
                                          │  Durable Object  │
                                          │   (Game Room)    │
                                          │                  │
                                          │  - Room State    │
                                          │  - Players       │
                                          │  - Rounds        │
                                          │  - Scores        │
                                          └──────────────────┘
```

### Game Modes

#### 🤖 AI Judge Mode
- Players submit answers to a prompt
- Google Gemini AI analyzes all answers
- AI picks the worst answer with a personalized roast
- Automatic scoring

#### 🗳️ Majority Voting Mode  
- Players submit answers to a prompt
- All players vote for the worst answer (can't vote for themselves)
- The answer with most votes loses
- Ties are broken randomly

### Data Storage

**No database needed!** Game state is stored in Cloudflare Durable Objects:
- Each room gets its own Durable Object instance
- State persists across requests
- Automatic cleanup when rooms are inactive
- Scales infinitely

## 🧪 Local Development

### Run Backend Locally

```bash
cd server
npm run dev
```

This starts the Worker at `http://localhost:8787`

### Run Frontend Locally

```bash
cd client
npm run dev
```

This starts the client at `http://localhost:5173`

## 📊 Monitoring & Debugging

### View Worker Logs

```bash
cd server
wrangler tail
```

This streams real-time logs from your deployed Worker.

### View Durable Objects

In your Cloudflare dashboard:
1. Go to Workers & Pages
2. Select your Worker
3. Click on "Durable Objects" tab
4. See all active game rooms

## 💰 Pricing

Cloudflare Free Tier includes:
- ✅ 100,000 Worker requests/day
- ✅ 1,000,000 Durable Object requests/day
- ✅ 1 GB Durable Object storage
- ✅ Unlimited bandwidth

This is **more than enough** for most games!

## 🔧 Troubleshooting

### Issue: "Module not found: GameRoom"

**Solution:** Make sure you've deployed with:
```bash
npm run deploy
```

### Issue: WebSocket connection fails

**Solution:** Ensure your Worker URL is correct and includes the `/game/` path for WebSocket connections.

### Issue: AI judge not working

**Solution:** Verify your Gemini API key is set:
```bash
wrangler secret list
```

If not set, add it:
```bash
wrangler secret put GEMINI_API_KEY
```

## 🎉 You're Done!

Your game is now running on Cloudflare's global edge network with:
- ⚡ Low latency worldwide
- 🌐 Automatic scaling
- 💪 High reliability
- 🆓 Generous free tier

Enjoy your serverless "Who's the Clown?" game!
