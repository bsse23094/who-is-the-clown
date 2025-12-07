# 🚀 Deployment Checklist

Use this checklist to deploy your serverless "Who's the Clown?" game.

## ☐ Prerequisites

- [ ] Node.js 18+ installed
- [ ] Cloudflare account created (free tier is fine)
- [ ] Wrangler CLI installed globally (`npm install -g wrangler`)
- [ ] Logged into Wrangler (`wrangler login`)

## ☐ Backend Deployment

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Review Configuration
- [ ] Open `wrangler.toml`
- [ ] Verify `name = "who-is-the-clown"` (or change to your preferred name)
- [ ] Confirm AI API key is set: `AIzaSyBZkF0atgzom8Eg_eBlhyXp3vdPwc3JzUw`

### 3. Deploy to Cloudflare
```bash
npm run deploy
```

Expected output:
```
✨ Compiled Worker successfully
⛅️ Uploaded to Cloudflare
✨ Deployed to https://who-is-the-clown.your-subdomain.workers.dev
```

### 4. Test Backend
Visit: `https://your-worker-url/health`

Should return:
```json
{"status":"ok","serverless":true}
```

### 5. Set Production Secret (Optional but Recommended)
```bash
wrangler secret put GEMINI_API_KEY
# When prompted, enter: AIzaSyBZkF0atgzom8Eg_eBlhyXp3vdPwc3JzUw
```

## ☐ Frontend Configuration

### 1. Install Dependencies
```bash
cd client
npm install
```

### 2. Configure Environment
- [ ] Copy `.env.example` to `.env`
```bash
cp .env.example .env
```

- [ ] Edit `.env` and set your Worker URL:
```env
VITE_SERVER_URL=https://your-worker-url.workers.dev
```

### 3. Test Locally
```bash
npm run dev
```

- [ ] Visit `http://localhost:5173`
- [ ] Try creating a room
- [ ] Test both AI and Voting modes
- [ ] Verify WebSocket connection works

## ☐ Frontend Deployment

Choose one option:

### Option A: Cloudflare Pages (Recommended)

1. Build the app:
```bash
npm run build
```

2. Deploy to Cloudflare Pages:
```bash
npx wrangler pages deploy dist --project-name=who-is-the-clown
```

3. Note your Pages URL (e.g., `https://who-is-the-clown.pages.dev`)

4. Update CORS in `wrangler.toml`:
```toml
[vars]
CLIENT_ORIGIN = "https://who-is-the-clown.pages.dev"
```

5. Redeploy backend:
```bash
cd server
npm run deploy
```

### Option B: Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
npm run build
vercel --prod
```

3. Update CORS in backend (see Option A, step 4-5)

### Option C: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

3. Update CORS in backend (see Option A, step 4-5)

## ☐ Post-Deployment Testing

### Test AI Judge Mode
- [ ] Create a room with AI mode
- [ ] Invite at least 1 friend (or open incognito window)
- [ ] Submit answers
- [ ] Verify AI picks the worst answer with a roast
- [ ] Check scoreboard updates

### Test Voting Mode
- [ ] Create a room with Voting mode
- [ ] Invite at least 1 friend
- [ ] Submit answers
- [ ] Vote for worst answer
- [ ] Verify vote tallying works
- [ ] Check scoreboard updates

### Cross-Device Testing
- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Test on tablet
- [ ] Verify responsive design works

## ☐ Monitoring & Maintenance

### View Live Logs
```bash
cd server
wrangler tail
```

### Check Durable Objects
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to Workers & Pages
3. Select your Worker
4. Click "Durable Objects" tab
5. View active game rooms

### Update Backend
```bash
cd server
# Make your changes
npm run deploy
```

### Update Frontend
```bash
cd client
# Make your changes
npm run build
# Re-deploy using your chosen method
```

## ☐ Common Issues

### Issue: WebSocket connection fails
**Solution:**
- Check `VITE_SERVER_URL` in `.env`
- Ensure it matches your deployed Worker URL
- Clear browser cache and retry

### Issue: AI judge not working
**Solution:**
```bash
cd server
wrangler secret list
# If GEMINI_API_KEY is missing:
wrangler secret put GEMINI_API_KEY
# Enter: AIzaSyBZkF0atgzom8Eg_eBlhyXp3vdPwc3JzUw
```

### Issue: CORS errors
**Solution:**
- Update `CLIENT_ORIGIN` in `wrangler.toml`
- Must match your frontend URL exactly
- Redeploy backend

### Issue: "Module not found: GameRoom"
**Solution:**
```bash
cd server
npm install
npm run deploy
```

## ☐ Performance Optimization

### Enable Caching (Optional)
Add to `wrangler.toml`:
```toml
[build]
cache = true
```

### Monitor Usage
1. Go to Cloudflare Dashboard
2. Check Workers Analytics
3. Monitor:
   - Requests per day
   - Error rate
   - P99 latency
   - Durable Object usage

## ☐ Security Checklist

- [ ] AI API key stored as secret (not in code)
- [ ] CORS properly configured (not using `*`)
- [ ] Rate limiting considered (if needed)
- [ ] Input validation in place
- [ ] No sensitive data in logs

## 🎉 Deployment Complete!

Your game is now live and running on Cloudflare's global network!

**Share your game:**
- Frontend URL: `_________________`
- Backend URL: `_________________`

**Monitor your game:**
- Cloudflare Dashboard: https://dash.cloudflare.com
- Live logs: `wrangler tail`

**Need help?**
- Check [CLOUDFLARE_DEPLOY.md](./CLOUDFLARE_DEPLOY.md)
- Check [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)
- Cloudflare Docs: https://developers.cloudflare.com/workers/

---

**Enjoy your serverless game! 🤡🎉**
