<template>

  <div class="movie-detail">
   <!-- id ispisuje nije imdb_id <h2>{{movie.id}}</h2> -->
    <h1>{{movie.original_title}}</h1>
    <h6>{{ movie.overview }}</h6>
    <img :src="movie.poster_path" alt="nista slika" class="featured-img" />
    <h5>views: {{ movie.popularity }}</h5>

  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env.js';
export default {
  setup () {
    const movie = ref({});
    const route = useRoute();
    onBeforeMount(() => {
      fetch(`https://api.themoviedb.org/3/movie/550?api_key=${env.apikey}&i=${route.params.imdb_id}&plot=full`)
        .then(response => response.json())
        .then(data => {
          movie.value = data;
        });
    });
    return {
      movie
    }
  }
}
</script>

<style lang="scss">
.movie-detail {

  .featured-img {
    max-width: 200px;
    margin-bottom: 16px;
  }

}
</style>