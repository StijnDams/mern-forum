const express = require("express");
const connectDB = require("./config/db");

const app = express();

const authRoute = require("./routes/api/auth");
const usersRoute = require("./routes/api/users");
const postsRoute = require("./routes/api/posts");
const profileRoute = require("./routes/api/profile");

// Connect to DB
connectDB();

// Define routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/profile", profileRoute);

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
