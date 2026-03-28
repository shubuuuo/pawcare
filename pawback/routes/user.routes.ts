import { Router } from "express";

const useRouter = Router();

useRouter.get("/", (req, res) => {
  res.send("User route");
});
useRouter.get("/users", (req, res) => {
  res.send("Get all users");
});
useRouter.get("/:id", (req, res) => {
  res.send("Get user details");
});
useRouter.post("/", (req, res) => {
  res.send("CREATE new user");
});
useRouter.put("/:id", (req, res) => {
  res.send("UPDATE user");
});
useRouter.delete("/:id", (req, res) => {
  res.send("DELETE user");
});

export default useRouter;
