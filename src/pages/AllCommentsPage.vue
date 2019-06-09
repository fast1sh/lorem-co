<template>
 <div>
  <main class="comments">
    <div class="container container_small">

      <h1 class="title comments-title">
        Comments
      </h1>

      <div class="comments-wrap">

        <AllCommentsBlock 
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"/>

      </div>

    </div>
  </main>

  <BackBlock />
 </div>
</template>

<script>
import AllCommentsBlock from "../components/AllCommentsBlock";
import BackBlock from "../components/common/BackBlock";

export default {
  components: {
    AllCommentsBlock,
    BackBlock
  },
  computed: {
    comments() {
      return this.$store.state.comments;
    }
  },
  created() {
    this.$store.dispatch('getAllComments');
  }
}
</script>

<style scoped>
@import '../styles/global.css';

.comments-title {
  margin-bottom: 100px;
  padding-top: 84px;
  color: #111518;
  font-family: "Sofia Pro Semibold";
  font-size: 70px;
}

.comments-wrap {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 780px) {
  .comments-title {
    font-size: 40px;
  }
  
  .comments-wrap {
    flex-direction: column;
    align-items: center;
  }
}
</style>
