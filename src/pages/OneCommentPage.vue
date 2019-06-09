<template>
 <div>
  <div class="one-comment">
    <div class="container container_one-comment">
      <router-link to="/comments" exact class="button button_back one-comment-button">Back to Comments</router-link>

      <h1 class="title one-comment-title">
        {{ selectedComment.title }}
      </h1>

      <div class="one-comment-body">
        {{ selectedComment.body }}
      </div>

    </div>
  </div>

  <BackBlock />
 </div>
</template>

<script>
import BackBlock from "../components/common/BackBlock";



export default {
  name: 'OneCommentPage',
  components: {
    BackBlock
  },
  computed: {
    selectedComment() {
      return this.$store.state.selectedComment;
    }
  },
  created() {
    this.$store.dispatch('getComment', this.$route.params.id);
  }
}
</script>

<style scoped>
@import '../styles/global.css';

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
  background-image: url('../assets/img/arrow.png');
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.one-comment-button {
  padding: 22px 25px 22px 24px;
  border: none;
  text-decoration: underline;
}

.one-comment-button::before {
  left: 0;
}

.one-comment-button:hover {
  color: #60e3a1;
}

.one-comment-title {
  margin-top: 40px;
  margin-bottom: 48px;
  font-size: 48px;
}

.one-comment-body {
  color: #101417;
  font-family: "Sofia Pro";
  font-size: 16px;
  line-height: 28px;
}

@media (max-width: 868px) {
  .one-comment .container {
    padding-top: 30px;
  }
}

@media (max-width: 544px) {
  .one-comment-title {
    margin-bottom: 15px;
    font-size: 30px;
  }

  .one-comment-body {
    font-size: 14px;
  }
}
</style>
