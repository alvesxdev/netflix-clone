const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados (treding)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários

*/

const basicFecth = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}

export default {
    getHomeList: async() => {
        return[
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFecth(`/discover/tv?with_network=213&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFecth(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFecth (`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFecth(`/discover/movie?with_genres=35&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFecth(`/discover/movie?with_genres=27&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFecth(`/discover/movie?with_genres=10749&api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFecth(`/discover/movie?with_genres=99&api_key=${API_KEY}&language=pt-BR`)
            },
        ];
    },

    getMovieInfo: async(movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFecth (`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break
                case 'tv':
                    info = await basicFecth (`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break
                    default:
                        info = null
                    break
            }
        }

        return info
    }

}