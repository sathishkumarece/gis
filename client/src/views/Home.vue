<template>
  <div class="home">
    <SearchArea></SearchArea>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchArea from '../components/SearchArea'

export default {
  name: "Home",
  components: {
    SearchArea
  }
};
</script>
<style>
.home{
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
}
</style>
