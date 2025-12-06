import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LobbyPage from "./pages/LobbyPage";
import RoomPage from "./pages/RoomPage";
import NotFoundPage from "./pages/NotFoundPage";
import { UserProvider } from "./context/UserContext";
import { RoomProvider } from "./context/RoomContext";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <UserProvider>
      <RoomProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lobby" element={<LobbyPage />} />
            <Route path="/room/:roomId" element={<RoomPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </RoomProvider>
    </UserProvider>
  );
}

export default App;
