const API_KEY = 'eda0e19f227f903661cf4db8911e547f';
const API_BASE = 'https://api.themoviedb.org/3';

/*
-Originais NEtflix
-Recomendados (tranding)
-Em alta (top rated)
-Ação
-Comédia
-Terror
-Romance
-Documentários
*/

//return (await fetch(`${API_BASE}${endpoint}`)).json();
const basicFecth = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json; 
}

export default {
    getHomeList : async () =>{
       return [
           {
               slug: 'originals',
               title : "Originais do Netflix",
               items : await basicFecth(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'trending',
               title : "Recomendados para Você",
               items : await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'toprated',
               title : "Em Alta",
               items : await basicFecth(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'action',
               title : "Ação",
               items : await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'comedy',
               title : "Comédia",
               items : await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'horror',
               title : "Terror",
               items : await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
           },
           {
               slug: 'romance',
               title : "Romance",
               items : await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
           },            
           {
               slug: 'documentary',
               title : "Documentários",
               items : await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
           },
       ]
    },

    getMovieInfo : async (movieId, type) =>{
        let info = {};
        if(movieId) {
            switch(type){
                case 'movie':
                    info = await basicFecth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                 case 'tv':
                    info = await basicFecth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }
         return info;
     }
}