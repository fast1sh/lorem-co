<template>
  <div class="about-us-block">
    <div class="about-us-block__image">
      <img :src="block.image" :alt="block.title">
    </div>

    <h2 class="about-us-block__title">
      {{ block.title }}
    </h2>

    <ul class="about-us-block__list" 
        v-for="(item, i) in block.items"
        :key="i">
      <li class="about-us-block__item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.about-us-block__image {
  margin-bottom: 16px;
  height: 37px;
  display: flex;
  align-items: center;
}

.about-us-block__title {
  margin-bottom: 30px;
  color: #101417;
  font-family: "Sofia Pro Bold";
  font-size: 36px;
}

.about-us-block__list {
  max-width: 257px;
}

.about-us-block__item {
  margin-bottom: 20px;
  color: #101417;
  font-family: "Sofia Pro";
  font-size: 16px;
  text-indent: 12px;
  position: relative;
  line-height: 17px;
}

.about-us-block__item::before {
  content: "•";
  position: absolute;
  left: -12px;
}
</style>
