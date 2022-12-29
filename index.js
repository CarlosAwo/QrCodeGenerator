var QRCode = require('qrcode')
let express = require("express")
let app = express()
const BodyParser = require("body-parser")

const PORT = 3005

//   EJS
app.set("views" , "./views")
app.set("view engine" , "ejs")
app.use(BodyParser.json());

app.get("/",(req,res)=>{
    res.render("index", {src:null})
})

app.post("/qrcode",(req,res)=>{
    console.log(req.body)
    console.log(req.body)
    console.log(req.body)
    console.log(req.body)
    console.log(req.body)
    console.log(req.body)
    console.log(req.body)
    console.log(req.body)

    /QRCode.toDataURL(JSON.stringify(req.body), function (err, url) {
      res.json({src:url})
    })
})

app.listen(PORT , ()=>{console.log("Server Listening at  http://localhost:"+PORT)})
/*
QRCode.toDataURL('I am a pony!', function (err, url) {
    console.log("toString")
  console.log(url)
})

QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
    console.log("toString terminal")
    console.log(url)
  })

  QRCode.toString('I am a pony!', function (err, url) {
    console.log("toString")
      console.log(url)
    })*/