import { db } from "../database.js";

export const submitController = (req,res)=>{

    const nama = req.body.nama;
    const email = req.body.email;
    const password = req.body.password;

    db.query(`insert into pendaftaran (nama, email, password) values ('${nama}','${email}','${password}')`)

    res.redirect('/home')

}

export const updateController = (req,res) => {
    const id = req.params.id

    db.query(`update pendaftaran set masuk = "tidak masuk" where id = ${id}`)

    res.redirect('/index')
}

export const deleteController = (req,res) => {
    const id = req.params.id

    db.query(`delete from pendaftaran where id = ${id}`)

    res.redirect('/index')
}

export const edittController = (req,res) => {
    const id = req.params.id
    const data = req.body
    console.log(data)

    db.query(`update pendaftaran set nama = ${data.nama}", email = ${data.email}", password = ${data.password}" where id = ${id}`)
    res.redirect('/index')
}
