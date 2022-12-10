//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];
let datas = [];
app.get("/", function(req, res){
  res.render("login");
});
app.get("/mainpage", function(req, res){
  res.render("mainpage",{posts : posts} );
});
app.get("/kalitekontrolgiris", function(req, res){
  res.render("kalitekontrolgiris",{posts : posts});
});
app.get("/kalitekontrol", function(req, res){
  res.render("kalitekontrol",{
    posts : posts ,
    datas : datas
  });
});
app.post("/kalitekontrolgiris", function(req ,res){
  const data = {
    adi: req.body.kalitekontrolAd ,
    sic: req.body.kalitekontrolC ,
    yas: req.body.kalitekontrolYas,
    gel: req.body.kalitekontrolGel
  };
  datas.push(data);
  res.redirect("/kalitekontrolgiris")
})
app.post("/login", function(req, res){
  const post = {
    user: req.body.username ,
  };
  posts.push(post);
  let password = req.body.password;
if(password === "mtanervurat" ){
  res.redirect("/mainpage");
}else{
  
}

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
