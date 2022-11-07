// //common js

// const express = require("express")
// const app = express();

// app.get("/", function(req,res){
//     res.send("Hello Word")
// })

// app.listen(3000, function(){
//     console.log("app berjalan dengan baik")
// })


// module

import session from 'express-session'
import express, { urlencoded } from 'express';
import { aboutController, contactController, editController, homeController, indexController, menuController, pageController, usernameController} from './controllers/indexController.js';
import { deleteController, edittController, submitController, updateController } from './controllers/submitController.js';
import { dbloginControlller, dbRegistrasiController, loginController, logoutController, RegistrasiController } from './controllers/userController.js';

const app = express();
 app.use(urlencoded({extended:true}))
 app.use(express.static('public'))
 app.use(session({
    secret: 'inikuncirahasia'
 }))

app.set("view engine", "ejs")
app.get("/index", indexController)
app.get("/page", pageController)
app.get("/about", aboutController)
app.get("/contact", contactController)
app.get("/home", homeController)
app.get("/username", usernameController)
app.get("/menu", menuController)
app.post("/submit", submitController)
app.get("/update/:id", updateController)
app.get("/delete/:id", deleteController )
app.get("/edit/:id", editController)
app.post("/edit/:id", edittController)

app.get("/registrasi", RegistrasiController)
app.post("/registrasi", dbRegistrasiController)
app.get("/login", loginController)
app.post("/login", dbloginControlller)
app.get("/logout", logoutController)
app.listen(3000, ()=>{
    console.log("permadanii")
}) 
