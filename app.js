require("dotenv/config");

require("./db");

const express = require("express");
const app = express();

require("./config")(app);

app.locals.appTitle = `Movies app!`;

app.use("/", require("./routes/index.routes"));
app.use("/peliculas", require("./routes/movies.routes"));

require("./error-handling")(app);

module.exports = app;
