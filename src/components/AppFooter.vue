<template>
  <footer class="footer">
    <div class="container">

      <div class="contacts">
        <p class="contacts__item">mail@mailtest.com</p>
        <p class="contacts__item">+30-6977664062</p>
      </div>

      <span class="copyright">Copyright © 2019 Test All Rights Reserved.</span>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
@import '../styles/global.css';

.footer {
  background-color: #1d1e25;
}

.footer .container {
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(74, 77, 94, 0.3);
}

.contacts__item {
  margin-bottom: 25px;
  color: #ffffff;
  font-family: "Sofia Pro";
  font-size: 16px;
}

.copyright {
  color: #4a4d5e;
  font-family: "Sofia Pro";
  font-size: 13px;
  line-height: 43px;
}

@media (max-width: 430px) {
  .footer .container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
