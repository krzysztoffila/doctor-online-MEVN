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

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// Trasy dla autoryzacji
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Endpoint do pobierania danych zalogowanego użytkownika
app.get("/auth/user", async (req, res) => {
    try {
        // Pobierz token z nagłówka żądania
        const token = req.headers.authorization;
        console.log(token);
        // Zdekoduj token JWT, aby uzyskać identyfikator użytkownika
        const decodedToken = jwt.verify(token, "secretKey");
        console.log(decodedToken);
        const userId = decodedToken.userId;
        console.log(userId);

        // Pobierz dane użytkownika z bazy danych
        const user = await User.findById(userId);

        // Jeśli użytkownik nie istnieje, zwróć błąd 404
        if (!user) {
            return res.status(404).json({ error: "Użytkownik nie znaleziony" });
        }

        // Jeśli użytkownik istnieje, zwróć jego dane
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
