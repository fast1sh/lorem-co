<template>
  <div class="about-us" id="about-us">
    <div class="container container_small">

      <HomeAboutUsBlock 
        v-for="block in blocks"
        :key="block.id"
        :block="block"
      />

    </div>
  </div>
</template>

<script>
import HomeAboutUsBlock from "./HomeAboutUsBlock";

let nextBlockId = 0;

export default {
  name: 'HomeAboutUs',
  components: { 
    HomeAboutUsBlock
   },
  data() {
    return {
      blocks: [
        {
          id: nextBlockId++,
          image: require('../assets/img/about-us-1.png'),
          title: 'Who we are',
          items: [
            'It is a long established fact that a reader will be distracted',
            'The readable content of a page when looking at its layout',
            'The point of using Lorem Ipsum',
            'As opposed to using \'Content here, content here\'.'
          ]
        },
        {
          id: nextBlockId++,
          image: require('../assets/img/about-us-2.png'),
          title: 'What we do',
          items: [
            'Many desktop publishing packages and web page',
            'There are many variations of passages of Lorem Ipsum available, but the majority have',
            'Various versions have evolved over the years, sometimes by accident'
          ]
        },
        {
          id: nextBlockId++,
          image: require('../assets/img/about-us-3.png'),
          title: 'Technology',
          items: [
            'The point of using Lorem Ipsum',
            'As opposed to using \'Content here, content here\'',
            'Contrary to popular belief, Lorem Ipsum is not simply random text',
            'A Latin professor at Hampden-Sydney College in Virginia'
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>
@import '../styles/global.css';

.about-us {
  padding-top: 114px;
  padding-bottom: 87px;
  background-color: #f7f7f7;
}

.about-us .container {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 864px) {
    .about-us-block__title {
    font-size: 26px;
  }

  .about-us-block__list {
    width: 220px;
  }

  .about-us-block__item {
    margin-bottom: 10px;
    font-size: 14px;
  }
}

@media (max-width: 700px) {
  .about-us {
    padding-top: 50px;
    padding-bottom: 30px;
  }

  .about-us .container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .about-us-block {
    margin-bottom: 20px;
  }

  .about-us-block__image {
    margin-bottom: 10px;
  }

  .about-us-block__title {
    margin-bottom: 15px;
  }
}
</style>
