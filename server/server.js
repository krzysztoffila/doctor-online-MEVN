require("dotenv").config({
    path: ".env",
});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const Doctor = require("./models/Doctor");
const Appointment = require("./models/Appointment");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("error", (err) => {
    console.error("Błąd połączenia z bazą danych: " + err);
});
mongoose.connection.on("connected", () => {
    console.log("Połączono z bazą danych MongoDB");
});

const app = express();
const corsOptions = {
    origin: "http://localhost:8080",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cookieParser());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/auth/user", async (req, res) => {
    try {
        const token = req.cookies.token;
        const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        const userId = decodedToken.userId;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: "Użytkownik nie znaleziony" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Błąd pobierania danych użytkownika:", error);
        res.status(500).json({
            error: "Wystąpił błąd podczas pobierania danych użytkownika",
        });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
