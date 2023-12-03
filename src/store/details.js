import { defineStore } from 'pinia'
import { options } from "../static";

export const useDetails = defineStore('details', {
    state: () => ({ 
        movieInfo: null,
        tvInfo: null,
    }),
    actions: {
        async getDetails(id, type){
            try {
                const result = await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=ru`, options);
                const data = await result.json();
               if (type == 'movie') {
                this.movieInfo = data
               } else {
                this.tvInfo = data
               }
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    }
})