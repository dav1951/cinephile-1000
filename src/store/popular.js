import { defineStore } from 'pinia'
import { options } from "../static";

export const usePopular = defineStore('popular', {
    state: () => ({ 
        movieslist: [],
        tvslist: []
    }),
    actions: {
        async getPopular(type){
            try {
                const result = await fetch(`https://api.themoviedb.org/3/${type}/popular?language=ru&page=1`, options);
                const data = await result.json();
                let array = data.results.filter((elem)=>elem.poster_path != null)
                if (type == 'movie') {
                    this.movieslist = array;
                    
                } else {
                    this.tvslist = array;
                }
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    }
})