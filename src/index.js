const express = require ("express");

const PROT = process.env.PORT || 4000;

const app = express();

const route = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => console.Console.log(`Navigate to https://localhost:${PORT}`)); 