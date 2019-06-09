<template>
  <div class="comment-block">
    <div class="comment-block__title">
      {{ comment.title }}
    </div>
    <div class="comment-block__body">
      {{ comment.body }}
    </div>

    <router-link :to="'/onecomment/' + comment.id" class="button comment-block__button">Read More</router-link>
  </div>
</template>

<script>
export default {
  name: 'AllCommentsBlock',
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
@import '../styles/global.css';

.comment-block {
  padding: 44px 49px 45px 30px;
  margin-right: 40px;
  margin-bottom: 40px;
  width: 45%;
  box-shadow: 7px 11px 30px rgba(17, 21, 24, 0.04);
  border-radius: 3px;
}

.comment-block:nth-child(even) {
  margin-right: 0;
}

.comment-block__title {
  margin-bottom: 25px;
  color: #333333;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 20px;
}

.comment-block__body {
  margin-bottom: 50px;
  max-width: 422px;
  color: #888888;
  font-family: "Open Sans";
  font-size: 14px;
  line-height: 24px;
}

.comment-block__button {
  padding: 21px 33px 21px 33px;
}

@media (max-width: 780px) {
  .comment-block {
    width: 80%;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
