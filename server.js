const express= require("express");
const app= express();
const PORT = process.env.PORT || 4000

app.get("/", (req,res)=>{

    res.json({
        message: "Welcome to the application"
    })

})

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})