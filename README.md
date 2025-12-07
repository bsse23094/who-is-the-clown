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

A multiplayer shame engine where players compete to identify the funniest (or most ridiculous) AI-generated answers. Built with React, Node.js, Socket.IO, and powered by Google's Gemini AI.

![Who's the Clown Game](https://img.shields.io/badge/Game-Multiplayer-purple)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Node](https://img.shields.io/badge/Node-20+-green)

## 🎮 Live Demo

- **Frontend**: [https://yourusername.github.io/who-is-the-clown](https://yourusername.github.io/who-is-the-clown)
- **Backend API**: [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)

## 🌟 Features

- **Real-time Multiplayer** - Play with friends using Socket.IO
- **AI-Powered Judging** - Google Gemini AI evaluates answers for humor and creativity
- **Cyberpunk Design** - Stunning minimal UI with animated 3D background using Three.js
- **Dynamic Scoring** - Track clown counts, rounds won, and runner-up positions
- **Responsive** - Works seamlessly on desktop and mobile devices
- **Zero Configuration** - Just clone and play!

## 🎯 How to Play

1. **Host a Game** - Create a room and share the code with friends
2. **Join with Code** - Enter the 5-character room code to join
3. **Read the Prompt** - A creative prompt appears for all players
4. **Submit Answer** - Type your funniest, most creative response
5. **AI Judges** - Gemini AI picks the most ridiculous answer
6. **Score Points** - Earn medals for being the biggest clown!

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ 
- npm or yarn
- MongoDB Atlas account (free tier)
- Google AI Studio API key (free)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/who-is-the-clown.git
cd who-is-the-clown

# Install dependencies for both client and server
npm install

# Setup environment variables
cp server/.env.example server/.env
# Edit server/.env with your credentials:
# - MONGODB_URI=your_mongodb_connection_string
# - GEMINI_API_KEY=your_gemini_api_key
# - PORT=4001

cp client/.env.example client/.env
# Edit client/.env:
# - VITE_SERVER_URL=http://localhost:4001

# Start the development servers
npm run dev
```

The game will open at `http://localhost:5173`

## 🏗️ Project Structure

```
who-is-the-clown/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Hyperspeed/    # 3D animated background
│   │   │   ├── Layout/        # App layout wrapper
│   │   │   └── room/          # Game room components
│   │   ├── context/       # React context (User, Room)
│   │   ├── pages/         # Page components
│   │   ├── sockets/       # Socket.IO client
│   │   └── styles/        # Global styles
│   ├── public/            # Static assets
│   └── package.json
│
├── server/                # Node.js backend
│   ├── src/
│   │   ├── config/        # Database connection
│   │   ├── models/        # MongoDB schemas
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   ├── sockets/       # Socket.IO handlers
│   │   └── index.ts       # Server entry point
│   └── package.json
│
└── README.md
```

## 🎨 Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **SCSS** - Styling
- **Socket.IO Client** - Real-time communication
- **Three.js** - 3D graphics for background
- **React Router** - Navigation
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Socket.IO** - WebSocket server
- **MongoDB** - Database
- **Mongoose** - ODM
- **Google Generative AI** - AI judging
- **TypeScript** - Type safety

## 📦 Deployment

### Frontend (GitHub Pages)

```bash
# Update homepage in client/package.json
# "homepage": "https://yourusername.github.io/who-is-the-clown"

cd client
npm run deploy
```

Your frontend will be live at `https://yourusername.github.io/who-is-the-clown`

### Backend (Render.com - Free)

1. **Create account** at [Render.com](https://render.com)

2. **Create New Web Service**
   - Connect your GitHub repository
   - Root Directory: `server`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

3. **Add Environment Variables**
   ```
   MONGODB_URI=your_mongodb_atlas_uri
   GEMINI_API_KEY=your_gemini_api_key
   PORT=4001
   NODE_ENV=production
   ```

4. **Deploy** - Render will auto-deploy on every push

### Database (MongoDB Atlas - Free)

1. **Create account** at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

2. **Create Free Cluster**
   - Select M0 (Free tier)
   - Choose closest region

3. **Setup Database Access**
   - Create database user
   - Note username and password

4. **Network Access**
   - Allow access from anywhere (0.0.0.0/0)

5. **Get Connection String**
   - Click "Connect" → "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password

### Alternative Free Hosting Options

**Backend Alternatives:**
- **Railway** - 500 hours/month free
- **Fly.io** - Free tier with limits
- **Cyclic** - Unlimited apps
- **Vercel** - For serverless deployments

**Database Alternatives:**
- **MongoDB Atlas** - 512MB free forever
- **Supabase** - PostgreSQL free tier
- **PlanetScale** - MySQL free tier

## 🔧 Configuration

### Environment Variables

**Server (.env)**
```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/clown-game

# Google AI
GEMINI_API_KEY=your_gemini_api_key_here

# Server
PORT=4001
NODE_ENV=development

# CORS (optional)
CLIENT_URL=http://localhost:5173
```

**Client (.env)**
```env
# Backend API URL
VITE_SERVER_URL=http://localhost:4001

# For production, use your deployed backend URL:
# VITE_SERVER_URL=https://your-backend.onrender.com
```

### Getting API Keys

**Google Gemini AI (Free)**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Get API Key"
3. Create new API key
4. Copy and add to `server/.env`

**MongoDB Atlas (Free)**
1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free M0 cluster
3. Setup user and get connection string
4. Add to `server/.env`

## 🎮 Game Mechanics

### Scoring System

- **Certified Clown** 🤡 - Your answer was picked as the funniest
- **Runner Up** 🏆 - Second place finish
- **Participation** - Everyone plays, everyone scores

### Statistics Tracked

- Total clown counts (times you were the biggest clown)
- Rounds played
- Runner-up positions
- Win percentage

### AI Judging

The Google Gemini AI evaluates answers based on:
- **Humor** - How funny is the response?
- **Creativity** - Original and unexpected answers
- **Relevance** - Does it answer the prompt?
- **Entertainment Value** - Would this make everyone laugh?

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- Scoreboard requires at least 2 players to start
- Mobile keyboard may overlap input fields
- WebSocket connection requires stable internet

## 🚧 Roadmap

- [ ] Add voice chat integration
- [ ] Custom prompt creation
- [ ] Tournament mode
- [ ] Replay system
- [ ] Player profiles and stats history
- [ ] Achievement system
- [ ] Theme customization

## 💡 Tips for Best Experience

- **Use with 3-6 players** for optimal fun
- **Be creative** - AI loves unexpected answers
- **Keep sessions short** - 5-10 rounds is perfect
- **Stable internet** - Required for real-time play

## 🙏 Acknowledgments

- Google Gemini AI for intelligent judging
- Three.js community for amazing 3D graphics
- Socket.IO for seamless real-time communication
- All the clowns who playtested this game 🎪

## 📞 Support

Having issues? Found a bug?

- **Issues**: [GitHub Issues](https://github.com/yourusername/who-is-the-clown/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/who-is-the-clown/discussions)

## 🌐 Connect

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Twitter**: [@yourusername](https://twitter.com/yourusername)

---

**Made with 💜 by [Your Name]** | **Multiplayer Shame Engine © 2025**

*Play responsibly. Remember, everyone's a clown sometimes! 🤡*
