const express = require("express");
const app = express();
const port = 3000;
const router = require("./router");

app.use(express.static("public"));
app.use((req, res, next) => {
  console.log(
    `Request received for page "${req.url}" on ${new Date().toUTCString()}`
  );
  next();
});

app.get("/", router.index);
app.get("/index.html", router.index);
app.get("/book1.html", router.bookOne);
app.get("/book2.html", router.bookTwo);
app.get("/book3.html", router.bookThree);
app.get("/books.html", router.bookList);
app.get("/contact_us.html", router.contactUs);
app.get("/honesty_page.html", router.honestyPage);
app.get("/survey.html", router.survey);

// on error 404
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
  console.log(
    `An error occurred. Request for page "${
      req.url
    }" could not be found on the server. ${new Date().toUTCString()}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
