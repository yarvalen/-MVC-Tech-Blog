const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// const routes = require("./controllers/index.js");
const routes = require("./controllers");
const app = express();

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require("./utils/helpers");

const hbs = exphbs.create({ helpers });
//cookies
const sess = {
  secret: "secret message",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// app.get("/", (req, res) => {
//   res.render("homepage");
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening`));
});
