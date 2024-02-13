const User = require("../db")
const express = require("express")
const app = express()
const port = 3000
const zod = require("zod")
app.use(express.json())
const userZod = zod.object({
    first_name : zod.string(),
    last_name : zod.string(),
    username : zod.string().email(),
    password : zod.string().min(8),
    Phone : zod.number(),
    Address :zod.string()

})
app.post("/signup",async (req,res)=>{
    const input = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        Phone : req.body.Phone,
        Address:req.body.Address,
        username:req.body.username,
        password : req.body.password
    }
    console.log(input)
    
    const response = userZod.safeParse(input)
    console.log(response)
    if(!response.success){
        res.json({
            "message" : "zod validation failed"
        })
    }
    await User.create({
        first_name : input.first_name,
        last_name :input.last_name,
        Phone :input.Phone,
        Address :input.Address,
        username : input.username,
        password : input.password,
        date : new Date()
    })

    res.json({
        "message" : "user created succesfully"
    })
})


app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`)
})
