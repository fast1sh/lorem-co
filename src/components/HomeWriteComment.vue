<template>
  <div class="write-comment" id="write-comment">
    <div class="container container_small">

        <h3 class="write-comment-title">
          Write <br>
          comment
        </h3>

        <form @action="addComment" @submit="checkForm" class="write-comment-form"> 

          <div class="write-comment-form__wrap">
            <transition name="fade">
              <span class="write-comment-form__tooltip" 
                v-show="errors.title && !comment.title">Enter a title</span>
            </transition>
            <input type="text" class="write-comment-form__input" placeholder="Title"
              v-model="comment.title">
          </div>

          <div class="write-comment-form__wrap">
            <transition name="fade">
              <span class="write-comment-form__tooltip" 
                v-show="errors.body && !comment.body">Enter a comment</span>
            </transition>
            <textarea cols="30" rows="6" class="write-comment-form__input" placeholder="Your comment"
            v-model="comment.body"></textarea>
          </div>

          <button class="button write-comment-form__button"
            type="submit">Send</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WriteComment',
  data() {
    return {
      comment: {
        created_at: Date(),
        title: '',
        body: ''
      },
      errors: {
        title: false,
        body: false
      }
    }
  },
  methods: {
    addComment() {
      this.$store.dispatch('addComment', this.comment);
      this.comment.title = '';
      this.comment.body = '';
      alert('Thank you for comment!');
    },
    checkForm(e) {
      if (!this.comment.title) {
        this.errors.title = true;
      } else {
        this.errors.title = false;
      }

      if (!this.comment.body) {
        this.errors.body = true;
      } else {
        this.errors.body = false;
      }

      if (!this.errors.title && !this.errors.body) {
        this.addComment();
      }

      e.preventDefault();
    }
  }
}
</script>

<style scoped>
@import '../styles/global.css';

.write-comment {
  padding-top: 140px;
  padding-bottom: 145px;
  background-color: #1d1e25;
}

.write-comment .container {
  display: flex;
  justify-content: space-between;
}

.write-comment-title {
  color: #ffffff;
  font-family: "Sofia Pro Bold";
  font-size: 55px;
  position: relative;
}

.write-comment-title::after {
  content: '';
  display: block;
  width: 70px;
  height: 5px;
  background-color: #f9d10d;
  position: absolute;
  top: 140px;
}

.write-comment-form {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.write-comment-form__wrap {
  position: relative;
}

.write-comment-form__input {
  margin-bottom: 15px;
  padding: 15px 20px 15px 20px;
  border: 1px solid #60e3a1;
  border-radius: 3px;
  background: transparent;
  width: 592px;
  opacity: 0.6;
  color: #60e3a1;
  font-family: "Sofia Pro";
  font-size: 16px;
}

.write-comment-form__input::placeholder {
  color: #60e3a1;
}

.write-comment-form__button {
  width: 150px;
}

.write-comment-form__tooltip {
  width: 200px;
  background-color: #e36060;
  color: #fff;
  font-family: 'Sofia Pro';
  text-align: center;
  padding: 10px 0;
  border-radius: 3px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  top: -45px;
  z-index: 1;
  opacity: .7;
}

.write-comment-form__tooltip::after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #e36060 transparent transparent transparent;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

@media (max-width: 863px) {
  .write-comment-title {
    font-size: 40px;
  }

  .write-comment-title::after {
    top: 100px;
  }

  .write-comment-form__input {
    width: 350px;
  }
}

@media (max-width: 560px) {
  .write-comment-form__input {
    width: 250px;
  }
}

@media (max-width: 560px) {

  .write-comment {
    padding-top: 50px;
    padding-bottom: 30px;
  }

  .write-comment .container {
    flex-direction: column;
  }

  .write-comment-title {
    margin-bottom: 50px;
  }

  .write-comment-form__input {
    width: 100%;
  }
}
</style>
