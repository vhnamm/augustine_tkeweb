const jsonServer = require("json-server");
const cors = require("cors");
const express = require("express"); // json-server uses express; require để rõ ràng

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// CORS + expose header
server.use(
  cors({
    origin: "*",
    exposedHeaders: ["X-Total-Count"],
  })
);

server.use(middlewares);

// Middleware thêm X-Total-Count khi dùng pagination
server.use((req, res, next) => {
  if (req.method === "GET" && (req.query._page || req.query._limit || req.query._start || req.query._end)) {
    const parts = req.path.split("/").filter(Boolean);
    const collection = parts[0] || "";
    try {
      const data = router.db.get(collection).value() || [];
      res.header("X-Total-Count", data.length);
      res.header("Access-Control-Expose-Headers", "X-Total-Count");
    } catch (err) {
      // ignore if collection not found
    }
  }
  next();
});

server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✔ JSON Server running at http://localhost:${PORT}`);
});