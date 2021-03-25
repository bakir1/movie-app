 <template>
  <div class="home">


<form @submit.prevent="SearchMovies" class="search-box">
  <input type="text" placeholder="Search" v-model="search" />
  <input type="submit" value="Search" />
</form>

<div class="movies-list">
  <div class="movie" v-for="movie in movies" :key="movie.imdb_id">
    <router-link :to="'/movie/' + movie.imdb_id" class="movie-link">
    <div class="product-image">
      <img src="movie.Poster" alt="Movie Poster" />
      <div class="type"> {{ movie.Type }} </div>
    </div>
    <div class="detail">
      <p class="y">{{ movie.Year }}</p>
      <h3>{{ movie.Title }}</h3>
    </div>
    </router-link>
  </div>
</div>
  </div>
</template>


<script>
import { ref } from 'vue';
import env from '@/env.js'

export default {
  setup () {
    const search = ref("");
    const movies = ref([]);
    const SearchMovies = () => {
      if (search.value != "") {
        fetch(`https://api.themoviedb.org/3/movie/550?api_key=${env.apikey}&s=${search.value}`)
          .then(response => response.json())
          .then(data => {
            movies.value = data.Search;           
            search.value = "";
          });
      }
    }
    
    return {
      search,
      movies,
      SearchMovies
    }
  }
}
</script>



<style lang="scss">
  .home {
    .feature-card{
      position: relative;

      .feature-img {
        display: block;
        width: 20%;
        height: 20px;
        object-fit: cover;

        position: relative;
        z-index: 0;
      }
      
      .detail{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 16px;
        z-index: 1;
      }

      h3 {
        color: #FFF;
        margin-bottom: 16px;
      }

      p{
        color: rgb(236, 233, 233);
      }
    }
  }

 .search-box {
    display: flex;
    flex-direction: column;
    padding: 16px;
    input {
      display: block;
      appearance: none;
      justify-content: right;
      align-items: right;
      border: none;
      outline: none;
      background: none;
      &[type="text"] {
        width: 30%;
        color: #FFF;
        background-color: #b6b6b6;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;
        &::placeholder {
          color: #f3f3f3;
        }
        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }
      &[type="submit"] {
        width: 10%;
        max-width: 300px;
        background-color: #ffffff;
        padding: 16px;
        border-radius: 8px;
        color: #FFF;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
        &:active {
          background-color: #3B8070;
        }
      }
    }
  }

</style>

