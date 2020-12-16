<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div>
  <Header></Header>
  <!-- <div class="navbar-static"></div> -->
  <!-- <div class="container"> -->
    <router-view />
  <!-- </div> -->
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {Header}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffff;
  /* background-image: linear-gradient(to bottom, rgba(1, 1, 1, 0.9), rgba(1,1,1,0.3)),url("./assets/img/bg.jpg"); */
  background-image: linear-gradient(45deg, rgb(240, 2, 127, 0.8), #486e9f),url("./assets/img/bg.jpg");
  /* background-image: linear-gradient(to bottom, rgb(130, 17, 99,0.8), rgb(247, 79, 58,0.6)),url("./assets/img/bg.jpg"); */
  /* background-image: linear-gradient(to bottom,rgba(1,1,1,0.9), rgba(162, 246, 250, 0.9),rgb(252, 238, 212,0.8)),url("./assets/img/bg.jpg"); */
  /* background-image: linear-gradient(135deg,rgb(12, 65, 69),rgb(81, 162, 176)); */
  /* background-repeat: no-repeat; */
  height:100vh;
  padding:30px;
}

nav {
  padding: 30px;
}

nav ul li{
  margin-left:20px;
}

nav a {
  font-weight: bold;
  color: #ffffff !important;
  font-size:20px
}

nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-static {
    height: 55px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
}

</style>
