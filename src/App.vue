<template>
<div id="nav">
  <!-- button za stranice na pocetnoj -->
    <router-link to="/">Home</router-link> |
    <router-link to="/movie">Movies</router-link> |
    <router-link to="/shows">Tv Shows</router-link>
    <router-view/>

</div> 

</template>

<style lang="scss">
* {
  margin: 50;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
}

nav {
 display: flex;
 align-items: left;
 justify-content: left;
 padding: 20px 20px;
}

</style>
