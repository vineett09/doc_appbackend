const express = require("express");
const cors = require("cors"); // Import the cors package
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

// dotenv config
dotenv.config();

// mongodb connect
connectDb();

// rest object
const app = express();

// middlewares
app.use(cors()); // Enable CORS for all requests
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
app.use("/api/v1", require("./routes/searchRoutes"));

// port
const port = process.env.PORT || 8080;

// listen port
app.listen(port, () => {
  console.log(
    `server is running mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
