const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
const PORT = process.env.PORT || 5000;
dotenv.config();

//database
connectDb();

//routes

//middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//apply routes

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
