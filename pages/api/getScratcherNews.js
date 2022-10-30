import axios from 'axios'

export default async function getScratcherNews(req, res) {
    const {currency} = req.body
    const options = {
        method: 'GET',
        url: 'https://newscatcher.p.rapidapi.com/v1/search',
        params: {q: currency, lang: 'en', sort_by: 'relevancy', page: '1', media: 'True'},
        headers: {
          'X-RapidAPI-Key': '8853e00f71mshdf8197d0584c60ep1d9958jsn7c7047c9aa16',
          'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          res.json(response.data.articles);
      }).catch(function (error) {
          return res.json({message: error.message});
      });
}