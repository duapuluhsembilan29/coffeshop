import jwt  from "jsonwebtoken";
import { db } from "../database.js";

const JWT_Secret = 'inikuncirahasia'

export const RegistrasiController = (req, res) => {
    return res.render('registrasi')
}

export const dbRegistrasiController = (req, res) => {
    const nama = req.body.nama
    const email = req.body.email;
    const password = req.body.password;

    db.query(`insert into user (nama, email, password) values ("${nama}","${email}","${password}")`)

    res.redirect('/login')
}

export const loginController = (req, res) => {
    res.render('login')
}

export const dbloginControlller = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(`select * from user where email = "${email}" and password = "${password}"`, (err, result) => {
        if (err) {
            console.log(err)
            return res.redirect('/login')
        }

        const pengguna = result[0]
        if (!pengguna) return res.redirect('/login')

        const token = jwt.sign({
            nama: pengguna.nama,
            email: pengguna.email,
            password: pengguna.password
        }, JWT_Secret, {expiresIn: '6h'})

        req.session.penggunaToken = token;
        return res.redirect('/contact')
    })

}

    export const logoutController = (req,res)=>{
        req.session.penggunaToken = undefined
        return res.redirect("/login")
}

export const cekuserController = (req,res, next)=>{
    if(!req.session.penggunaToken) return res.redirect("/login")

    jwt.verify(req.session.penggunaToken, JWT_Secret, (err, penggunaToken)=> {

        if(err){
            console.log(err)
            return res.redirect("/login")
        }
        req.pengguna = pengguna
        next()
    })
 }

 
