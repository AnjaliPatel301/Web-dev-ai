const {GoogleGenerativeAI}= require ("@google/generative-ai")

require ("dotenv").config()

const ai=new GoogleGenerativeAI(process.env.Api_key_Ai)

async function generateAIResponse(prompt) {
    ai.getGenerativeModel({model:"gemini-2.5-flash"})
    const result=await model.generateContent({
        Contents:[
            {
                role:"user",
                parts:[{text:prompt}]
            }
        ]
    })
    const responce=await result.responce
    return responce.text()
    
}

module.exports = generateAIResponse