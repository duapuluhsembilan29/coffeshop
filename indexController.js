import { db } from "../database.js"

export const indexController = (req,res)=>{
    return db.query(`select * from pendaftaran`, (err,result)=>{
        if(err) throw err
        return res.render('index', {pendaftaran : result} )
    })
}

export const pageController = (req,res)=>{
    res.render("page")
}

export const aboutController = (req,res)=>{
     res.render("about")
}

export const contactController = (req,res)=>{
     res.render("contact")
}

export const homeController = (req,res)=>{
      res.render("home")
}

export const usernameController = (req,res) =>{
      res.render("username")
}
export const menuController = (req,res)=>{
    res.render("menu")
}

export const editController = (req,res) =>{
    const id = req.params.id

    return db.query(`select * from pendaftaran where id =${id}`, (err,result)=>{
        if(err) throw err
        return res.render('edit', {pendaftaran : result[0]} )
    })
}

