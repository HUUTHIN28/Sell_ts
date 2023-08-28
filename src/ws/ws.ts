import http from "http";
import WebSocket from "ws";
import url from "url";
const wsServer = new WebSocket.Server({ port: 8000 });
const wss = () => {
  wsServer.on("connection", (socket: WebSocket, req: any) => {
    const query = url.parse(req.url, true).query;
    const id = query.id;
    console.log("Received message:");
    socket.send(`Server received your message: ${id} `);
    socket.on("message", (message: string) => {
      socket.send("xin chao");
      console.log("Received message:", message);
      socket.send("Server received your message: " + message);
    });
  });

  wsServer.on("upgrade", (request, socket, head) => {
    wsServer.handleUpgrade(request, socket, head, (socket) => {
      wsServer.emit("connection", socket, request);
    });
  });

  //   const wsServer = new WebSocket.Server({ port: 8000 });

  //   const handleConnection = (socket: WebSocket, req: any) => {
  //     const query = url.parse(req.url, true).query;
  //     const id = query.id;
  //     console.log("Received id:", id);
  //     socket.send("Received id dfgdfgdfg");
  //     socket.on("message", (message: string) => {
  //       console.log("Received message:", message);
  //       socket.send("Server received your message: " + message);
  //     });
  //   };
  //   const start = () => {
  //     wsServer.on("connection", handleConnection);

  //   };

  //   return {
  //     start,
  //   };
};

export const sendSuccessMessage = (data: object) => {
  const jsonString = JSON.stringify(data);
  wsServer.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(jsonString);
    }
  });
};

export default wss;
