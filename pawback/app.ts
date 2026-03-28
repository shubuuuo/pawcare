import express from "express";
import { PORT } from "./config/env.ts";

import userRouter from "./routes/user.routes.ts";
import authRouter from "./routes/auth.routes.ts";
import subscriptionRouter from "./routes/subscription.routes.ts";

const app = express();

// /api/v1/auth/sign-up
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.listen(PORT, () => {
  console.log(`Server running on the port http://localhost:${PORT}`);
});

export default app;
