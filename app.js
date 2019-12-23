const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

// Use Body Parser for user input
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MongoDB_URI, {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Use Routes for todos
app.use("/api/todos", require("./routes/todos"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Setup PORT = Localhost
app.listen(process.env.PORT, () =>
  console.log(`App started on port ${process.env.PORT}`)
);
