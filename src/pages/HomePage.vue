<template>
  <div>
    <main class="main">
      <div class="container container_small">
        <h1 class="title main-title">
          Lorem Ipsum is simply <br>
          dummy text of the printing <br>
          and typesetting industry
        </h1>
      </div>
    </main>

    <div class="office">
      <img src="../assets/img/office.jpg" alt="Office">
    </div>

    <HomeAboutUs />
    <HomeWriteComment />

  </div>
</template>

<script>
import HomeAboutUs from "../components/HomeAboutUs";
import HomeWriteComment from "../components/HomeWriteComment";

export default {
  name: 'HomePage',
  components: {
    HomeAboutUs,
    HomeWriteComment
  }
}
</script>

<style scoped>
@import '../styles/global.css';

.main {
  padding-top: 65px;
}

.main-title {
  line-height: 72px;
}

.office {
  padding-top: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.office img {
  display: block;
  height: auto;
  max-width: 100%;
}

@media (max-width: 864px) {
  .main-title {
    line-height: 50px;
  }
}
</style>
