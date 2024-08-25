import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/blogRoute.js";
import connectDB from "./config/db.js";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "https://zupay-task-blog-1.onrender.com",
  })
);
app.use(express.json());

app.use("/api/v1/blog", router);

app.listen(PORT, () => console.log("Listening at port " + PORT));
