import axios from "axios";

export default async function getNews(req, res){
    try {
        res.json({message:"dupa"})
    } catch (e) {
        res.json({message:e.message})
    }
}