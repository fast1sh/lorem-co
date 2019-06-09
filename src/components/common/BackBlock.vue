<template>
  <div class="back">
    <h2 class="back-title">
      Lorem Ipsum is text of the typesetting industry
    </h2>
  
    <router-link to="/" exact class="button button_back">Back to homepage</router-link>
  </div>
</template>

<script>
export default {
  name: 'BackBlock'
}
</script>

<style scoped>
@import '../../styles/global.css';

.back {
  padding-top: 80px;
  padding-bottom: 100px;
  text-align: center;
}

.back-title {
  margin-bottom: 60px;
  opacity: 0.5;
  color: #111518;
  font-family: "Sofia Pro Semibold";
  font-size: 24px;
}

.button_back {
  padding: 22px 25px 22px 50px;
  background: transparent;
  border: 1px solid #60e3a1;
  position: relative;
}

.button_back::before {
  content: '';
  display: block;
  width: 10px;
  height: 12px;
  background-image: url('../../assets/img/arrow.png');
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.button_back:hover {
  color: #60e3a1;
}
</style>
