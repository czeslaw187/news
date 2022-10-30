import axios from 'axios'

export default async function getScratcherNews(req, res) {
    const {currency} = req.body
    const options = {
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_NEWSCRATCHERAPI_URL}/search`,
        params: {q: currency, lang: 'en', sort_by: 'relevancy', page: '1', media: 'True'},
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_NEWSCRATCHERAPI_KEY,
          'X-RapidAPI-Host': process.env.NEXT_PUBLIC_NEWSCRATCHERAPI_HOST
        }
      };
      
      axios.request(options).then(function (response) {
          res.json(response.data.articles);
      }).catch(function (error) {
          return res.json({message: error.message});
      });
}