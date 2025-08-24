const router= require("express").Router()
const Aicontroler= require("../controller/aicontailler")

router.get("/homepage",Aicontroler.homepagecontaoler)

router.post("/ask",Aicontroler.AIpromptcontroler)


module.exports=router