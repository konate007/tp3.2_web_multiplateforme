//API/TMDBApi.js
//https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=DP69G5EkGxAsnnhtdpT3n7VlNGUncURx
const API_TOKEN = "d282ffb76662ca38565d8f89dc18622b";

export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text +page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailForApi(id){
  const url = 'https://api.themoviedb.org/3/search/movie/' + id + 'api_key=' + API_TOKEN + '&language=fr&query='
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}