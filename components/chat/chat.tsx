import { Button, Input } from "@chakra-ui/react";
import { ChatLog } from "./chatLog";
import { io, Socket } from "socket.io-client";
import React, {
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Message } from "../../types/Message";

interface Props {
  displayName: string;
  logout: () => void;
}
let socket: Socket | undefined;
export function Chat({ displayName, logout }: Props): JSX.Element {
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const initSocket = async () => {
    await fetch("/api/socket");
    socket = io();
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("update-chat", (msg) => {
      console.log("receive");
      setMsgs((m) => [...m, JSON.parse(msg)]);
    });
  };

  useEffect(() => {
    initSocket();
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (socket === undefined) return;
    socket.emit("send-chat", JSON.stringify({ name: displayName, msg: input }));
    setInput("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <ChatLog displayName={displayName} msgs={msgs}></ChatLog>
      <form onSubmit={handleSend}>
        <Input
          placeholder="Enter a message"
          onChange={handleChange}
          value={input}
        ></Input>
      </form>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
