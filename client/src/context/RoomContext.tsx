import { createContext, useContext, useState, ReactNode } from "react";

interface Room {
  _id: string;
  code: string;
  status: string;
  players: any[];
  currentRound?: string;
}

interface RoomContextValue {
  room: Room | null;
  setRoom: (r: Room | null) => void;
}

const RoomContext = createContext<RoomContextValue | undefined>(undefined);

export function RoomProvider({ children }: { children: ReactNode }) {
  const [room, setRoom] = useState<Room | null>(null);
  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      {children}
    </RoomContext.Provider>
  );
}

export function useRoom() {
  const ctx = useContext(RoomContext);
  if (!ctx) throw new Error("useRoom must be used within RoomProvider");
  return ctx;
}
