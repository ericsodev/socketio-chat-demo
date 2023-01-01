import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!(res.socket as any).server.io) {
    const io = new Server((res.socket as any).server);
    (res.socket as any).server.io = io;
    io.on("connection", (socket) => {
      socket.on("send-chat", (msg) => {
        io.emit("update-chat", msg);
      });
    });
  } else {
    console.log("Socket already established");
  }
  res.end();
}
