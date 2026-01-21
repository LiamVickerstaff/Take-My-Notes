import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = "3000";

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! now with types!");
});

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});

app.get("/note1", (req: Request, res: Response) => {
  const resNote = {
    title: "note from backend",
    description:
      "a long description or maybe even a short one... who really knows the depth of this.",
  };

  res.status(200).json(resNote);
});
