const app = require("express")();
const mongoose = require("mongoose");
require("dotenv").config();

// Use Body Parser for user input
app.use(require("express").json());

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

// Setup PORT = Localhost
app.listen(process.env.PORT, () =>
  console.log(`App started on port ${process.env.PORT}`)
);
