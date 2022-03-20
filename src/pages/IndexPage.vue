<template>
  <q-page style="padding: 1em" class="flex flex-center">
<button @click="OnTest">ff</button>
gfgfgfg
    <p v-for="status in all_posts" :key="status" class="q-p-sm">
      status - {{status.descriptions}}

      </p>
  </q-page>
</template>

<!-- <script>
import { defineComponent } from "vue";
import { useStore } from 'vuex'
import {OnTest} from '../use/user'

export default defineComponent({
  preFetch({ store }) {
    console.log(1);
    store.dispatch("posts/fetchPosts");
  },
  name: "IndexPage",


  data() {
    return {
      posts: [],
      user:[]
    };
  },
  computed: {

    all_posts() {
      this.posts = this.$store.getters["posts/shops"]

      return this.posts
    },


  },
});
</script> -->

<script>
import { defineComponent } from "vue";
import { useStore } from 'vuex'
import {OnTest} from '../use/user'
export default {
  setup() {
    return{

        OnTest

    }
  },
}
</script>
