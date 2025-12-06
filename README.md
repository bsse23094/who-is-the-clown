# Who's the Clown? 🎭

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
