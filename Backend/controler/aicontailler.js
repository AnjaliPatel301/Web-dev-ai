const { json } = require("express")
const generateAIResponse= require("../src/ai.service")

const homepagecontaoler=(req,res)=>{
    res.send("hello guys good evening...")
}


const AIpromptcontroler=async(req,res)=>{
   
    const prompt = res.body.prompt
    if(!prompt){
        return res.status(404),json("missing Prompt...")
            }
            try{
                const response= await generateAIResponse(prompt)
                res.json(response)

            }
            catch(error){
                res.status(500),json("something is misssing..")
            }
}

module.exports={
    homepagecontaoler,
    AIpromptcontroler
}