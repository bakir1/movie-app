
<template>

  <div class="movie-detail">
    <!-- nista ne prikazuje -->
    <h2>{{movie.id}}</h2>
    <p>{{ movie.overview }}</p>
    <img :src="movie.poster_path" alt="Movie Poster" class="featured-img" />
    <p>{{ movie.production_companies }}</p>

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
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${env.apikey}&i=${route.params.imdb_id}&plot=full`)
      //kopiran za popularne filmove
//      https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

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
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
  }
  p {
    color: #FFF;
    font-size: 18px;
    line-height: 1.4;
  }
}
</style>