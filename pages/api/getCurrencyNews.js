import axios from 'axios'

export default async function getCurrency(req, res) {
    if (req.body){
        const {currency} = req.body
        try {
            let response = await axios.get(`https://newsapi.org/v2/everything?q=${currency}&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`)
            res.json(response.data)
        } catch (error) {
            return res.json({message: error.message})
        }
    }
    
}