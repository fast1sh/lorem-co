<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="../assets/img/logo.png" alt="Lorem">
      </router-link>
      
      <nav class="nav">
        <router-link to="/#about-us" exact class="nav__link">About us</router-link>
        <router-link to="/#write-comment" exact class="nav__link">Write comment</router-link>
        <router-link to="/comments" exact class="nav__link">Comments</router-link>
      </nav>

    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
@import '../styles/global.css';

.header {
  padding-top: 49px;
}

.header .container {
  display: flex;
  justify-content: space-between;
}

.nav {
  display: flex;
  align-items: center;
}

.nav__link {
  margin-right: 38px;
  color: #111518;
  font-family: "Sofia Pro Medium";
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.98px;
  position: relative;
}

.nav__link:last-child {
  margin-right: 0;
}

.nav__link:hover::before {
  content: '';
  display: block;
  height: 2px;
  width: 100%;
  background-color: #f9d10d;
  top: -20px;
  position: absolute;
}

.router-link-active::before {
  content: '';
  display: block;
  height: 2px;
  width: 100%;
  background-color: #f9d10d;
  top: -20px;
  position: absolute;
}

@media (max-width: 542px) {
  .header .container {
    flex-direction: column;
    align-items: center;
  }

  .logo {
    margin-bottom: 30px;
  }

  .nav__link {
    margin-right: 15px;
    font-size: 12px;
  }
}
</style>
