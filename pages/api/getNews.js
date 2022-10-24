import axios from "axios";

export default async function getNews(req, res){
    try {
        const resp = await axios.get('https://nfs.faireconomy.media/ff_calendar_thisweek.json')
        res.json(resp.data)
    } catch (e) {
        res.json({message:e.message})
    }
}