const express=require("express")
const router=express.Router()
const{createUsers,login}=require("../controller/donnerCollector.js")

router.post("/register",createUsers)


module.exports=router