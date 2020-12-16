<template>
  <nav class="navbar fixed-top navbar-expand-lg scrolling-navbar">
    <div class="container nav-container">
      <!-- Brand -->
      <a class="navbar-brand" target="_self" href="/">
        <strong>PrimeDee Empire</strong>
        <div class="sub-title">Frieght Inc.</div>
        <!-- <img class="logo" alt="PrimeDee Empire" src="../assets/logo-03.png" /> -->
      </a>
      <ul class="navbar-nav ml-auto nav-link-title">
        <li class="nav-item">
          <a
            href="https://www.facebook.com/sathishkumarece95"
            class="nav-link"
            target="_blank"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://twitter.com/sathish95"
            class="nav-link"
            target="_blank"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://github.com/sathishkumarece"
            class="nav-link"
            target="_blank"
          >
            <i class="fab fa-instagram mr-2"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<style scoped>
.logo {
  height: 100px;
  width: 100px;
}

.navbar-nav {
  flex-direction: row !important;
}

.sub-title {
  margin-top: -5px;
  font-size: 16px;
}
</style>
