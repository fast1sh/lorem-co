<template>
  <div id="app">
    <AppHeader />
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
@import './styles/reset.min.css';
@import './assets/fonts/fonts.css';

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-active {
  transition-delay: .5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
