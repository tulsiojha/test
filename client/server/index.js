const path = require("path")
const express = require("express")
const app = express();

var x = 0;
app.use('/about', function (req, res, next) {
    x = x + 1;
    return res.send('about '+x);
  })
app.use("/hello", (req, res, next)=>{
    return res.send('hello');
})

app.use("/pictures", (req, res, next)=>{
    return res.send('pictures');
})
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use((req, res, next)=>{
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


app.listen(5000, ()=>{
    console.log("server started");
})