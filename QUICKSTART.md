# 🚀 Quick Start Guide

## ✅ Prerequisites Installed
- ✅ Node.js 18+
- ✅ MongoDB 8.0.9
- ✅ All dependencies installed

## 🎮 Start Playing in 3 Steps

### 1️⃣ Start MongoDB
```powershell
net start MongoDB
```

### 2️⃣ Start the Backend Server
```powershell
cd server
npm run dev
```
✅ Server running on: http://localhost:4001

### 3️⃣ Start the Frontend
```powershell
cd client
npm run dev
```
✅ Game running on: http://localhost:5173

---

## 🎯 Choose Your Judge Mode

Edit `server/.env`:
```env
JUDGE_MODE=logic   # Options: ai, vote, logic, random
```

### Judge Mode Options:

**🧠 Logic** (Default - Recommended)
- Fast and reliable
- Longest answer = clown
- No setup needed

**🗳️ Vote**
- Players vote for worst answer
- Most democratic option
- Great for 3+ players

**🤖 AI** (Gemini)
- AI picks with creative roasts
- Requires API key (currently quota-limited)
- Falls back to logic if unavailable

**🎲 Random**
- Pure chaos mode
- Completely random selection
- Fun for quick games

---

## 🎪 How to Play

1. **Open the game**: http://localhost:5173
2. **Create or join a room**:
   - Click "Start Playing"
   - Either "Create Room" or "Join Room" with code
3. **Wait for players** (minimum 2 players)
4. **Start a round**
5. **Submit your worst answer** to the prompt
6. **See who's the clown!**
7. **Check the scoreboard**
8. **Play again!**

---

## 🧪 Test the Backend

```powershell
# Health check
curl http://localhost:4001/health

# Test AI judge (will fallback to logic due to quota)
cd server
npm run test:ai
```

---

## 📋 Current Status

✅ **Working:**
- MongoDB connected
- Backend API running
- Socket.IO real-time game
- Logic judge ⭐
- Random judge ⭐
- Voting system ⭐
- Scoreboard tracking

⚠️ **AI Judge:**
- Code fully implemented ✅
- API key configured ✅
- Quota exceeded (needs 24h cooldown) ⚠️
- **Auto-fallback to logic judge working** ✅

---

## 🎉 You're Ready to Play!

**Current best mode**: **Logic** or **Vote**  
**Server**: http://localhost:4001  
**Frontend**: http://localhost:5173

Have fun finding out who's the clown! 🤡
