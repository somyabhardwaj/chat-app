
import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import {connectToDb} from "./database/connectToDb.js";
import { Server } from "socket.io";
import URL from "url";
import PATH from "path";
dotenv.config();
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors({ origin: "https://chat-app-nyjk.vercel.app", methods: ["GET", "POST"] })); // Allow Vite Frontend

const io = new Server(server, {
  cors: {
    origin: "https://chat-app-nyjk.vercel.app", // Frontend URL (Vite runs on 5173)
    methods: ["GET", "POST"]
  }
});
io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("message", (message) => {
    io.emit("message", message); 
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
connectToDb().then(()=>{
    server.listen(5000,()=>{
        console.log("server listing to 5000");
     })
}).catch((error)=>{
    console.log({error});
});
const __dirname = PATH.dirname(URL.fileURLToPath(import.meta.url));
app.get('/', (req, res) => {
  res.sendFile(PATH.join(__dirname, 'public/index.html'));
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
  });

  