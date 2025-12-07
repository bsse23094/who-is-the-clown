# 🤡 Who Is The Clown?

A hilarious multiplayer party game where players compete to give the funniest answers to absurd prompts. An AI judge (or majority vote) determines who gave the most ridiculous answer - crowning them "The Clown"!

## 🎮 Live Demo

- **Frontend**: https://bsse23094.github.io/who-is-the-clown/
- **Backend API**: https://who-is-the-clown.bsse23094.workers.dev

## ✨ Features

- 🎯 **Real-time Multiplayer**: Play with 2-10 players in real-time using WebSockets
- 🤖 **AI Judge Mode**: Google Gemini AI judges answers and roasts the clown
- 🗳️ **Voting Mode**: Anonymous majority voting to pick the funniest answer
- 👑 **Host Controls**: Room creator gets special privileges to start rounds
- 📊 **Live Scoreboard**: Track who's been the clown the most
- 🎨 **Modern UI**: Clean, responsive interface with smooth animations
- ☁️ **Serverless**: Powered by Cloudflare Workers & Durable Objects
- 🌐 **Global Edge Network**: Low latency worldwide
- 🔄 **Auto-Deploy**: GitHub Actions deploys frontend automatically

## 🎲 How to Play

1. **Create a Room**: Click "Create Room" and choose your judge mode (AI or Voting)
2. **Invite Friends**: Share the room code with 1-9 other players (2-10 players total)
3. **Read the Prompt**: Each round starts with a random absurd prompt
4. **Submit Answer**: Type your funniest response within the time limit
5. **Judge Time**: 
   - **AI Mode**: Google Gemini picks the funniest/worst answer and displays all answers
   - **Voting Mode**: All players vote anonymously for the best answer
6. **Crown the Clown**: The "winner" gets roasted and earns a point
7. **Next Round**: Host starts the next round when ready

## 🎪 Game Rules

- **Players**: 2-10 players per room
- **Roles**: The room creator becomes the host (marked with 👑)
- **Starting**: Only the host can start each round
- **Anonymous Voting**: In voting mode, answers are shuffled to prevent bias
- **Answer Display**: In AI mode, all answers are shown with player names after judging
- **Scoring**: Each time you're crowned the clown, you get +1 point
- **Winning**: The player with the most clown points... loses? Or wins? It's complicated!

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Navigation
- **Lucide Icons** - Beautiful icons
- **SCSS** - Styling
- **GitHub Pages** - Hosting

### Backend
- **Cloudflare Workers** - Serverless compute
- **Durable Objects** - Stateful WebSocket connections
- **SQLite** - Persistent storage (via Durable Objects)
- **Google Gemini API** - AI judge
- **Native WebSockets** - Real-time communication

## 🚀 Deployment

### Backend (Cloudflare Workers)

The backend is deployed to Cloudflare Workers:

```bash
cd server
npx wrangler deploy
```

**Environment Variables** (set as Cloudflare secrets):
- `GEMINI_API_KEY` - Your Google Gemini API key

```bash
npx wrangler secret put GEMINI_API_KEY
```

### Frontend (GitHub Pages)

The frontend deploys automatically via GitHub Actions on push to `master`:

1. Push changes to GitHub
2. GitHub Actions builds and deploys to GitHub Pages
3. Live at: https://bsse23094.github.io/who-is-the-clown/

Or deploy manually:
```bash
cd client
npm run build
npm run deploy
```

## 💻 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn
- Cloudflare account (free tier works!)
- Google Gemini API key

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/bsse23094/who-is-the-clown.git
cd who-is-the-clown
```

2. **Install dependencies**
```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

3. **Configure backend**
```bash
cd server
# Add your Gemini API key as a secret
npx wrangler secret put GEMINI_API_KEY
# Enter your API key when prompted
```

4. **Run development servers**
```bash
# Terminal 1 - Backend
cd server
npx wrangler dev

# Terminal 2 - Frontend
cd client
npm run dev
```

5. **Open in browser**
- Frontend: http://localhost:5174/who-is-the-clown/
- Backend: http://localhost:8787

## 🏗️ Architecture

```
Client (React + Vite)
        ↓
Cloudflare Worker (Entry Point)
        ↓
Durable Objects (Game Rooms)
        ↓
Google Gemini API (AI Judge)
```


## 📁 Project Structure

```
who-is-the-clown/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── room/       # Game room components
│   │   │   │   ├── PromptView.tsx      # Display prompt
│   │   │   │   ├── AnswerForm.tsx      # Submit answers
│   │   │   │   ├── VotingView.tsx      # Voting interface
│   │   │   │   ├── RevealView.tsx      # Show results & answers
│   │   │   │   └── Scoreboard.tsx      # Final scores
│   │   │   ├── Layout/     # Layout wrapper
│   │   │   └── Hyperspeed/ # Background animation
│   │   ├── pages/          # Page components
│   │   │   ├── HomePage.tsx
│   │   │   ├── LobbyPage.tsx
│   │   │   └── RoomPage.tsx
│   │   ├── sockets/        # WebSocket client
│   │   │   └── cloudflareSocket.ts
│   │   ├── context/        # React context
│   │   └── styles/         # Global styles
│   ├── package.json
│   └── vite.config.ts
│
├── server/                  # Cloudflare Workers backend
│   ├── src/
│   │   ├── durable-objects/ # Game state management
│   │   │   └── GameRoom.ts  # Main game logic (2-10 players)
│   │   ├── services/        # Business logic
│   │   │   ├── judgeService.ts  # AI & voting logic
│   │   │   ├── roomService.ts   # Room management
│   │   │   └── promptService.ts # Prompt generation
│   │   ├── utils/           # Utilities
│   │   │   └── prompts.ts   # 100+ game prompts
│   │   └── index.ts         # Entry point
│   ├── wrangler.toml        # Cloudflare config
│   └── package.json
│
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
└── README.md
```

## 🎯 Key Features Explained

### WebSocket Architecture
- Uses Cloudflare's native WebSocket support
- Message queue system prevents race conditions
- Automatic reconnection with exponential backoff
- Duplicate connection prevention for React StrictMode

### Game State Management
- Durable Objects provide persistent state
- SQLite storage for game history
- Real-time synchronization across all players
- Atomic state updates for voting/judging
- **Room capacity**: 2-10 players per game

### AI Judge
- Google Gemini API analyzes all answers
- Picks the funniest/most absurd response
- Generates custom roasts for the clown
- Shows all answers with player names after judging
- Fallback to voting if AI fails

### Anonymous Voting
- Answers are shuffled before display
- Vote counts shown in real-time
- Results revealed after all votes
- Majority wins, ties broken randomly
- Can't vote for yourself

### Host Controls
- Room creator marked with 👑 crown icon
- Only host can start each round
- Host privileges persist across rounds
- Other players wait for host to start

## 🔧 Configuration

### Frontend (`client/vite.config.ts`)
```typescript
export default defineConfig({
  base: '/who-is-the-clown/',  // GitHub Pages base path
  build: {
    outDir: 'dist',
  },
});
```

### Backend (`server/wrangler.toml`)
```toml
name = "who-is-the-clown"
main = "src/index.ts"
compatibility_date = "2024-12-01"

[[durable_objects.bindings]]
name = "GAME_ROOM"
class_name = "GameRoom"

[env.production.vars]
ALLOWED_ORIGINS = "https://bsse23094.github.io"
```

## 🐛 Troubleshooting

### Common Issues

**WebSocket Connection Fails**
- Check if backend is deployed: https://who-is-the-clown.bsse23094.workers.dev/health
- Clear browser cache and reload
- Check browser console for errors

**AI Judge Not Working**
- Verify `GEMINI_API_KEY` is set in Cloudflare Workers secrets
- Check API quota limits
- Falls back to voting mode if AI fails

**Players Can't Join Room**
- Room supports 2-10 players max
- Check room code is correct
- Room must be in "waiting" state

**React StrictMode Double Mounting**
- Implemented message queue with 50ms delay
- WebSocket cleanup commented in dev mode

## 💡 Tips for Best Experience

- **Minimum Players**: Need at least 2 players to start
- **Maximum Players**: Up to 10 players per room
- **Internet**: Stable connection recommended
- **Browser**: Use modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile**: Fully responsive, works on phones and tablets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🎉 Credits

- Built with ❤️ for party game enthusiasts
- AI powered by Google Gemini
- Icons by Lucide
- Hosted on Cloudflare Workers & GitHub Pages
- Real-time magic by Durable Objects

## 📞 Support

Having issues? Found a bug? 
- Open an issue on GitHub
- Check existing issues for solutions
- Join our community discussions

---

**Have fun and may the best clown win! 🤡🎪**


---

**Have fun and may the best clown win! 🤡🎉** 🎭
