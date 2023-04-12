<template>
  <div>
    <header>
      <!-- header content goes here -->
      <Header></Header>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <!-- footer content goes here -->
      <Footer></Footer>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  },
  setup() {
    const message = 'This is my component!';
    return { message };
  },
});
</script>